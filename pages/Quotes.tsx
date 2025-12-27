import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote as QuoteIcon, Search, Sparkles, MoveRight, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const QUOTES_DATA = [
  { text: "A leader wins not by doing everything, but by focusing on what builds the future.", category: "Leadership" },
  { text: "Big visions need small repeated actions. Consistency is my greatest strategy.", category: "Strategy" },
  { text: "Success is not built in comfort; it grows when leaders dare to take bold, disciplined steps.", category: "Leadership" },
  { text: "Success begins with discipline and grows with consistency. Every challenge is a chance to rise higher.", category: "Growth" }
];

const ASSET_QUOTES_HERO = "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2940&auto=format&fit=crop";

const Quotes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(QUOTES_DATA.map(q => q.category))];

  const filteredQuotes = QUOTES_DATA.filter(q => {
    const matchesSearch = q.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || q.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen"
    >
      {/* Header */}
      <div className="bg-brand-navy py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-cover bg-center grayscale pointer-events-none" style={{ backgroundImage: `url('${ASSET_QUOTES_HERO}')` }}></div>
        <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
          <QuoteIcon size={250} className="text-brand-gold" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-8"
          >
            <Sparkles size={14} className="text-brand-gold" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/80">Thought Leadership</span>
          </motion.div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8">Reflections on Vision & Value</h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
            Authentic insights from Dr. Harish Kamaraj on leadership, consistency, and the architecture of success.
          </p>
        </div>
        <div className="absolute bottom-6 right-8 z-20 flex items-center gap-2 opacity-30">
          <ImageIcon size={12} className="text-white" />
          <span className="text-[8px] font-bold tracking-widest uppercase text-white">Asset Placeholder</span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-xl border-b border-notion-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all whitespace-nowrap ${
                  activeCategory === cat 
                    ? 'bg-brand-navy text-white shadow-lg' 
                    : 'bg-notion-cream text-apple-sub hover:bg-brand-sapphire/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-apple-sub" size={16} />
            <input 
              type="text" 
              placeholder="Search quotes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-notion-cream border-none rounded-2xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-brand-sapphire/20 placeholder:text-apple-sub/50"
            />
          </div>
        </div>
      </div>

      {/* Quotes Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredQuotes.map((q, idx) => (
              <motion.div
                layout
                key={q.text}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white p-12 rounded-[48px] border border-notion-border hover:border-brand-sapphire/20 hover:shadow-soft transition-all duration-500 flex flex-col justify-between"
              >
                <div className="absolute top-8 left-8">
                  <QuoteIcon size={32} className="text-brand-gold/10 group-hover:text-brand-gold/30 transition-colors" />
                </div>
                <div className="relative pt-8">
                  <p className="font-serif text-2xl lg:text-3xl text-apple-gray italic leading-relaxed mb-12">
                    "{q.text}"
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-notion-border pt-8">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-sapphire/50">
                    {q.category}
                  </span>
                  <div className="w-8 h-px bg-brand-gold/30 group-hover:w-16 transition-all duration-700"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredQuotes.length === 0 && (
          <div className="text-center py-40">
            <p className="text-apple-sub italic text-lg">No reflections found matching your search.</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="py-32 bg-notion-cream border-t border-notion-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-bold text-apple-gray mb-8">Join the Dialogue</h2>
          <p className="text-xl text-apple-sub mb-12 font-light">
            Strategic collaborations and thought-led partnerships begin with shared values.
          </p>
          <Link to="/#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-brand-navy text-white rounded-2xl font-bold hover:shadow-xl transition-all">
            Initiate Collaboration <MoveRight size={20} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Quotes;