import React from 'react';
import { Award, BookOpen, Sparkles, Quote as QuoteIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const FOUNDER_IMAGE = "https://media.licdn.com/dms/image/v2/D5622AQG5utms66YaZA/feedshare-shrink_800/B56ZtftewPHgAk-/0/1766837318871?e=1768435200&v=beta&t=dbjotl3wnMzyA4KDa5B04dUHDkIdUqVDkO8HHznePlw";
const ASSET_EXECUTIVE_DESK = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2940&auto=format&fit=crop";

const About: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white"
    >
      {/* Narrative Header with Background */}
      <div className="relative border-b border-notion-border py-32 lg:py-48 overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 opacity-15 bg-cover bg-center grayscale pointer-events-none" style={{ backgroundImage: `url('${ASSET_EXECUTIVE_DESK}')` }}></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/10 backdrop-blur-md rounded-full mb-10 border border-white/20 shadow-sm"
          >
            <Sparkles size={16} className="text-brand-gold" />
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-white/90">The Founder's Path</span>
          </motion.div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[100px] font-bold text-white mb-12 tracking-tight leading-[0.95]">Dr. Harish Kamaraj</h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-slate-300 leading-relaxed max-w-4xl mx-auto font-light italic opacity-90">
            "We are not here to chase quarterly trends. We are here to build infrastructure for the next generation."
          </p>
        </div>
      </div>

      {/* Narrative Body */}
      <div className="max-w-[1400px] mx-auto px-6 py-32 lg:py-52">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-start">
          
          {/* Portrait Sidebar */}
          <div className="lg:col-span-5 order-2 lg:order-1 w-full">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <div className="bg-white p-5 lg:p-8 rounded-[80px] shadow-soft border border-notion-border relative group overflow-hidden">
                <div className="aspect-[4/5] w-full rounded-[64px] overflow-hidden relative shadow-2xl bg-slate-50">
                  <div 
                    className="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-[2.5s] group-hover:scale-110"
                    style={{ 
                      backgroundImage: `url('${FOUNDER_IMAGE}')`,
                      backgroundPosition: '75% center'
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent"></div>
                </div>

                <div className="mt-12 p-6">
                  <h3 className="font-serif text-4xl font-bold text-brand-navy mb-4 tracking-tight">Dr. Harish Kamaraj</h3>
                  <p className="text-[11px] text-brand-sapphire font-bold uppercase tracking-[0.4em] mb-14 opacity-80">Visionary Founder & CEO</p>
                  
                  <div className="space-y-12">
                    <div className="flex items-start gap-8 group/icon">
                      <div className="p-5 bg-brand-gold/10 rounded-3xl text-brand-gold transition-all group-hover/icon:bg-brand-gold group-hover/icon:text-white duration-500 shrink-0 shadow-sm">
                        <Award size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-navy text-[10px] uppercase tracking-[0.3em] mb-2.5 opacity-60">Credentials</h4>
                        <p className="text-xl text-apple-sub font-light leading-snug">Pharm.D, Registered Pharmacist</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-8 group/icon">
                      <div className="p-5 bg-brand-sapphire/10 rounded-3xl text-brand-sapphire transition-all group-hover/icon:bg-brand-sapphire group-hover/icon:text-white duration-500 shrink-0 shadow-sm">
                        <BookOpen size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-navy text-[10px] uppercase tracking-[0.3em] mb-2.5 opacity-60">Expertise</h4>
                        <p className="text-xl text-apple-sub font-light leading-snug">Industrial Architecture & Systemic Scaling</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-24 lg:pt-16">
            <section className="space-y-12">
              <div className="flex items-center gap-6">
                <div className="h-px w-16 bg-brand-gold/30"></div>
                <h2 className="font-serif text-5xl font-bold text-brand-navy tracking-tight">Visionary Industrialism</h2>
              </div>
              <div className="space-y-10 text-apple-gray text-2xl lg:text-3xl leading-[1.6] font-light opacity-90">
                <p>
                  Dr. Harish Kamaraj is a visionary entrepreneur and social architect based in Tamil Nadu, India. 
                  His approach to business is defined not by capital alone, but by <span className="text-brand-sapphire font-medium underline decoration-brand-gold/20 underline-offset-8">clinical precision</span> and unshakeable ethical frameworks. 
                </p>
                <p className="text-xl lg:text-2xl text-apple-sub leading-relaxed font-light">
                  His professional journey through high-stakes clinical research and pharmaceutical healthcare environments instilled a disciplined approach to scaling that he now applies to a broader industrial landscape. He believes that true societal impact is achieved through the creation of robust, self-sustaining institutions that serve as permanent models of excellence.
                </p>
              </div>
            </section>

            <section className="space-y-12">
              <div className="flex items-center gap-6">
                <div className="h-px w-16 bg-brand-gold/30"></div>
                <h2 className="font-serif text-5xl font-bold text-brand-navy tracking-tight">The Project S Mandate</h2>
              </div>
              <div className="space-y-10 text-apple-gray text-2xl lg:text-3xl leading-[1.6] font-light opacity-90">
                <p>
                  Project S serves as the central governing body for Dr. Harish’s ventures. It is architected as the <span className="text-brand-gold font-medium italic">"ethical spine"</span> of every entrepreneurial effort under his leadership.
                </p>
                <p className="text-xl lg:text-2xl text-apple-sub leading-relaxed font-light">
                  The group ensures that every subsidiary, regardless of sector, adheres to a unified code of sovereign governance and long-term visionary impact. Under this mandate, the group is currently perfecting critical healthcare delivery models through <a href="https://www.medinetpharma.in/" className="text-brand-navy font-medium hover:underline">Medinet Pharmaceuticals</a>.
                </p>
              </div>
            </section>

            {/* Blockquote */}
            <section className="p-16 lg:p-24 bg-notion-cream rounded-[80px] border border-notion-border relative overflow-hidden group shadow-soft hover:shadow-2xl transition-all duration-700">
              <QuoteIcon className="absolute top-12 right-12 text-brand-gold/10 w-32 h-32 group-hover:scale-110 group-hover:text-brand-gold/20 transition-all duration-1000" />
              <p className="font-serif text-3xl lg:text-5xl text-brand-navy italic leading-[1.2] relative z-10 tracking-tight">
                "Success is building something that does not require your presence to function, but will always carry your principles."
              </p>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;