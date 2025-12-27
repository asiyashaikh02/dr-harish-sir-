import React from 'react';
import { TrendingUp, Landmark, Users, CheckCircle2, Lock, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const LongTerm: React.FC = () => {
  const roadmap = [
    {
      period: "Years 1-5",
      title: "Foundational Expansion",
      status: "Active Phase",
      desc: "Establishing the core holding structure and dominating the regional pharmaceutical supply chain.",
      items: [
        "Scaling Medinet Pharmaceuticals across South India.",
        "Formalizing the Project S Governance Code.",
        "Establishing the first industrial social impact fund."
      ],
      icon: Zap,
      color: "brand-teal"
    },
    {
      period: "Years 6-10",
      title: "Vertical Diversification",
      status: "Strategic Roadmap",
      desc: "Translation of clinical logistics expertise into other strategic industrial sectors.",
      items: [
        "Entry into Strategic Enterprise Logistics.",
        "AI-driven predictive pharmaceutical distribution.",
        "Establishment of the first Project S Excellence Center."
      ],
      icon: TrendingUp,
      color: "brand-sapphire"
    },
    {
      period: "Years 11-15",
      title: "Regional Sovereignty",
      status: "Future Vision",
      desc: "Becoming the benchmark for ethical enterprise in India with deep community integration.",
      items: [
        "Development of private-public healthcare partnerships.",
        "Scaling philanthropic programs to state-wide reach.",
        "Sovereign wealth management for social dividends."
      ],
      icon: Users,
      color: "brand-gold"
    },
    {
      period: "Years 16-20",
      title: "Institutional Legacy",
      status: "Enduring Vision",
      desc: "A self-governing entity where operations are managed by a council of principles.",
      items: [
        "Founder transition to Chairman emeritus.",
        "Global clinical-industrial partnerships.",
        "Creation of a permanent trust for community growth."
      ],
      icon: Landmark,
      color: "brand-navy"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen"
    >
      {/* Header */}
      <div className="bg-notion-cream py-32 border-b border-notion-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 rounded-full mb-6"
          >
            <ShieldCheck size={14} className="text-brand-gold" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-brand-gold">Generational Mandate</span>
          </motion.div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-apple-gray mb-8">The 20-Year Horizon</h1>
          <p className="text-xl md:text-2xl text-apple-sub max-w-3xl mx-auto font-light leading-relaxed">
            Cathedral Thinking: Laying the stones for structures we may never see completed. 
          </p>
        </div>
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Content */}
          <div className="lg:col-span-4 h-fit sticky top-32 space-y-8">
            <div className="bg-white p-12 rounded-[40px] border border-notion-border shadow-soft">
              <h3 className="text-2xl font-bold text-apple-gray mb-6">Strategic Continuity</h3>
              <p className="text-apple-sub mb-10 text-sm leading-relaxed">
                Project S is designed with institutional permanence. We don't build for exits; we build for legacies.
              </p>
              <div className="space-y-4">
                {[
                  "Systemic Sovereignty",
                  "Ethical Rigidity",
                  "Clinical Precision"
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 text-brand-sapphire font-bold text-[10px] tracking-widest uppercase">
                    <CheckCircle2 size={16} className="text-brand-gold" /> {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-8 bg-brand-navy rounded-[32px] text-white">
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Milestone Progress</h4>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "25%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-brand-gold"
                />
              </div>
              <p className="mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">Phase 1: 25% Complete</p>
            </div>
          </div>

          {/* Main Roadmap */}
          <div className="lg:col-span-8 space-y-12">
            {roadmap.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12 md:pl-20 group"
              >
                {/* Visual Line */}
                <div className="absolute left-0 top-0 bottom-[-48px] w-px bg-brand-sapphire/10 group-last:bottom-0"></div>
                <div className={`absolute left-[-10px] top-4 w-5 h-5 rounded-full border-[4px] border-white shadow-md z-10 transition-all duration-500 bg-brand-${step.color.split('-')[1]}`}></div>
                
                <div className={`bg-white p-12 rounded-[48px] border border-notion-border hover:shadow-soft transition-all duration-500 ${step.status.includes('Active') ? 'border-brand-gold/30 ring-1 ring-brand-gold/10' : ''}`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-${step.color.split('-')[1]}`}>
                        <step.icon size={28} />
                      </div>
                      <div>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-sapphire/50 block mb-1">{step.period}</span>
                        <h2 className="font-serif text-3xl font-bold text-apple-gray">{step.title}</h2>
                      </div>
                    </div>
                    <div className={`px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase ${step.status.includes('Active') ? 'bg-brand-gold text-white' : 'bg-slate-50 text-slate-400'}`}>
                      {step.status}
                    </div>
                  </div>

                  <p className="text-apple-sub text-lg mb-10 font-light leading-relaxed">{step.desc}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {step.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-notion-cream/40 rounded-2xl">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0"></div>
                        <span className="text-apple-gray text-sm font-medium leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  {step.status !== 'Active Phase' && (
                    <div className="mt-12 flex items-center gap-3 text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase border-t border-slate-50 pt-8">
                      <Lock size={14} /> Locked Milestone
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default LongTerm;