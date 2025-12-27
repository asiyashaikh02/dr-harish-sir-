import React from 'react';
import { Target, Layers, Heart, Scale, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Mission: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-notion-cream/30 min-h-screen pb-32"
    >
      {/* Hero Section */}
      <div className="relative bg-brand-navy text-white py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center grayscale"></div>
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <span className="text-brand-gold font-bold tracking-[0.4em] uppercase text-xs mb-8 block">Our Mandate</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.15] mb-8 tracking-tight">
            To build a structured, ethical ecosystem where industry serves humanity.
          </h1>
          <div className="w-24 h-px bg-brand-gold mx-auto mb-10 opacity-60"></div>
        </div>
        <div className="absolute bottom-4 right-6 z-20 flex items-center gap-2 opacity-40">
          <ImageIcon size={12} />
          <span className="text-[8px] font-bold tracking-widest uppercase">Asset Placeholder</span>
        </div>
      </div>

      {/* Core Mission Points */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-20 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          
          <div className="bg-white p-12 lg:p-16 shadow-soft rounded-[48px] border border-notion-border hover:shadow-2xl transition-all duration-700">
            <div className="flex flex-col items-start mb-6">
              <div className="p-4 bg-brand-teal/10 rounded-2xl text-brand-teal mb-8">
                <Layers size={36} />
              </div>
              <div>
                <h3 className="font-serif text-3xl font-bold text-brand-navy mb-6">Structured Growth</h3>
                <p className="text-apple-sub text-lg leading-relaxed font-light">
                  Our mission is to replace chaotic expansion with calculated, systemic scaling. 
                  Medinet Pharmaceutical operates under three verticals: Medinet Pharmacy, Medinet Pharma, and Medinet Super Speciality Clinic. This structure allows us to scale without compromising quality or clinical precision.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 lg:p-16 shadow-soft rounded-[48px] border border-notion-border hover:shadow-2xl transition-all duration-700">
            <div className="flex flex-col items-start mb-6">
              <div className="p-4 bg-brand-gold/10 rounded-2xl text-brand-gold mb-8">
                <Scale size={36} />
              </div>
              <div>
                <h3 className="font-serif text-3xl font-bold text-brand-navy mb-6">Ethical Governance</h3>
                <p className="text-apple-sub text-lg leading-relaxed font-light">
                  We exist to prove that ethics and profitability are not mutually exclusive. 
                  Our mission is to establish a gold standard of compliance, transparency, and fairness 
                  in every vertical—from the pharmacy counter to the super speciality clinic.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 lg:p-16 shadow-soft rounded-[48px] border border-notion-border hover:shadow-2xl transition-all duration-700">
            <div className="flex flex-col items-start mb-6">
              <div className="p-4 bg-brand-navy/10 rounded-2xl text-brand-navy mb-8">
                <Heart size={36} />
              </div>
              <div>
                <h3 className="font-serif text-3xl font-bold text-brand-navy mb-6">Social Responsibility</h3>
                <p className="text-apple-sub text-lg leading-relaxed font-light">
                  We are committed to the philosophy that a business cannot thrive in a failing society. 
                  Our mission is to embed philanthropy directly into our P&L, ensuring that as Medinet Pharmaceutical grows, 
                  our capacity to serve the community grows with it.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 lg:p-16 shadow-soft rounded-[48px] border border-notion-border hover:shadow-2xl transition-all duration-700">
            <div className="flex flex-col items-start mb-6">
              <div className="p-4 bg-slate-100 rounded-2xl text-slate-500 mb-8">
                <Target size={36} />
              </div>
              <div>
                <h3 className="font-serif text-3xl font-bold text-brand-navy mb-6">Long-Term Value</h3>
                <p className="text-apple-sub text-lg leading-relaxed font-light">
                  We reject short-termism. Our mission is to create assets, 
                  systems, and relationships that retain value for decades, ensuring stability for our stakeholders, 
                  employees, and partners across the entire pharmaceutical ecosystem.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Mission;