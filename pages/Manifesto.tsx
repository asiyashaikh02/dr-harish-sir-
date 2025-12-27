import React from 'react';
import { Quote, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const ASSET_MANIFESTO_BG = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop";

const Manifesto: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-brand-navy min-h-screen text-slate-100 py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-cover bg-center grayscale pointer-events-none" style={{ backgroundImage: `url('${ASSET_MANIFESTO_BG}')` }}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center">
          <Quote size={48} className="text-brand-gold mx-auto mb-6 opacity-90" />
          <h1 className="font-serif text-3xl md:text-4xl text-white font-bold tracking-wide">Entrepreneurial Manifesto</h1>
          <p className="text-brand-teal mt-2 uppercase tracking-widest text-sm font-semibold">The Foundational Principles of Dr. Harish Kamaraj</p>
        </div>

        <div className="space-y-8 font-serif text-lg md:text-xl leading-relaxed text-slate-100/90 antialiased">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-4xl float-left mr-2 mt-[-10px] text-brand-gold font-bold">I</span>
            believe that business is the most powerful instrument for social change, but only when it is tuned to the frequency of integrity. In a world obsessed with speed, I choose direction. In an economy addicted to the short term, I choose the horizon.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            I believe that a company’s true worth is not found in its valuation, but in its values. When we founded Project S, it was not to simply add another corporate entity to the registry. It was to prove a hypothesis: that <span className="text-white font-bold underline decoration-brand-gold/30 underline-offset-4">ethical rigidity is a competitive advantage</span>, not a liability.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I see myself not merely as a CEO, but as an architect of systems. Systems that protect patients in our pharmaceutical ventures. Systems that ensure fairness for our employees. Systems that guarantee that as we profit, our community prospers.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I believe we have a responsibility that extends beyond shareholders. We answer to history. We answer to the families who rely on our services, and the young professionals who look to us for a model of how to lead.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Success, to me, is growing with integrity and lifting others along the way. It is about building something that does not require my presence to function, but will always carry my principles.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-white font-bold pt-8 text-2xl border-t border-white/10 mt-12"
          >
            "We are writing history, not just living it."
          </motion.p>

          <div className="pt-8">
            <div className="font-sans text-base text-slate-400">
              <p className="font-bold text-white mb-1">Dr. Harish Kamaraj</p>
              <p className="text-brand-teal uppercase tracking-widest text-xs font-bold">Founder & Visionary, Project S Group</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 right-8 z-20 flex items-center gap-2 opacity-20">
        <ImageIcon size={12} className="text-white" />
        <span className="text-[8px] font-bold tracking-widest uppercase text-white">Asset Placeholder</span>
      </div>
    </motion.div>
  );
};

export default Manifesto;