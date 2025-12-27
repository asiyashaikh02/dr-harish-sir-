import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';

const Vision: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white min-h-screen pb-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-48">
        
        {/* Intro */}
        <div className="max-w-4xl mb-32">
          <span className="text-brand-sapphire font-bold tracking-[0.4em] uppercase text-xs mb-8 block">The Future Map</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-brand-navy mb-10 tracking-tight">Our Vision</h1>
          <p className="text-2xl lg:text-3xl text-apple-sub leading-relaxed font-light">
            Project S aims to become a diversified institutional conglomerate where industry serves humanity, and success is measured by the depth of our impact.
          </p>
        </div>

        {/* Vision Timeline Blocks */}
        <div className="space-y-40 lg:space-y-64">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-navy mb-8 tracking-tight">Multi-Industry Expansion</h2>
              <div className="h-1 w-20 bg-brand-teal mb-10 opacity-40"></div>
              <p className="text-apple-sub text-xl lg:text-2xl leading-relaxed mb-8 font-light">
                We envision Project S evolving from a pharmaceutical-focused entity into a multi-vertical industrial group. 
                While healthcare remains our DNA via <a href="https://www.medinetpharma.in/" className="text-brand-sapphire font-medium hover:underline">Medinet Pharmaceuticals</a>, our vision includes strategic expansions into 
                sectors that support human infrastructure.
              </p>
              <p className="text-apple-sub text-xl lg:text-2xl leading-relaxed font-light">
                This expansion is not opportunistic; it is synergistic. Every new venture will share the same central 
                nervous system of ethics and operational excellence.
              </p>
            </div>
            <div className="order-1 md:order-2 relative aspect-[4/3] rounded-[64px] overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"></div>
                <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <ImageIcon size={12} className="text-white" />
                  <span className="text-[9px] font-bold tracking-widest uppercase text-white">Asset Placeholder</span>
                </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center">
             <div className="relative aspect-[4/3] rounded-[64px] overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532187875605-1ef6c237a145?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"></div>
                <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <ImageIcon size={12} className="text-white" />
                  <span className="text-[9px] font-bold tracking-widest uppercase text-white">Asset Placeholder</span>
                </div>
            </div>
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-navy mb-8 tracking-tight">Social Impact as Default</h2>
              <div className="h-1 w-20 bg-brand-gold mb-10 opacity-40"></div>
              <p className="text-apple-sub text-xl lg:text-2xl leading-relaxed font-light">
                We envision a future where "Corporate Social Responsibility" is not a department, but a default setting. 
                Project S aims to pioneer a business model where every unit of growth triggers a proportionate unit of social good.
              </p>
              <p className="text-apple-sub text-xl lg:text-2xl leading-relaxed font-light">
                Whether through healthcare access, educational initiatives, or community development, our vision is 
                inextricably linked to the betterment of our society.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-navy mb-8 tracking-tight">Sustainable Sovereignty</h2>
              <div className="h-1 w-20 bg-brand-navy mb-10 opacity-40"></div>
              <p className="text-apple-sub text-xl lg:text-2xl leading-relaxed mb-8 font-light">
                Sustainability is often discussed in environmental terms, but we view it through the lens of longevity. 
                Our vision is to build a sovereign, self-sustaining ecosystem that can weather economic cycles.
              </p>
              <p className="text-apple-sub text-xl lg:text-2xl leading-relaxed font-light">
                By maintaining strict financial discipline and ethical boundaries, we aim to be standing tall decades from now, 
                providing stability for our employees and consistent value for our partners.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-[64px] overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"></div>
                <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <ImageIcon size={12} className="text-white" />
                  <span className="text-[9px] font-bold tracking-widest uppercase text-white">Asset Placeholder</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Vision;