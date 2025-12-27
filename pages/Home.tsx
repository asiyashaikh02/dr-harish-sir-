import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'framer-motion';
import { ArrowUpRight, Quote as QuoteIcon, Sparkles, Compass, Shield, Rocket, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Authentic quote collection (STRICTLY APPROVED)
const ALL_QUOTES = [
  "A leader wins not by doing everything, but by focusing on what builds the future.",
  "Big visions need small repeated actions. Consistency is my greatest strategy.",
  "Success is not built in comfort; it grows when leaders dare to take bold, disciplined steps.",
  "Success begins with discipline and grows with consistency. Every challenge is a chance to rise higher."
];

// Professional Narrative Assets
const FOUNDER_IMAGE = "https://media.licdn.com/dms/image/v2/D5622AQG5utms66YaZA/feedshare-shrink_800/B56ZtftewPHgAk-/0/1766837318871?e=1768435200&v=beta&t=dbjotl3wnMzyA4KDa5B04dUHDkIdUqVDkO8HHznePlw";

// Project S: Abstract Governance / Corporate Strategy
const ASSET_PROJECT_S_GOVERNANCE = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"; 
// Medinet: Clinical Excellence / Pharmaceutical Research
const ASSET_MEDINET_CLINICAL = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2940&auto=format&fit=crop";
// General Industrial / Scaling
const ASSET_INDUSTRIAL_LOGISTICS = "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2940&auto=format&fit=crop"; 
// Heritage / Quote Background
const ASSET_QUOTE_BG = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2940&auto=format&fit=crop";

const Home: React.FC = () => {
  const heroRef = useRef(null);
  const journeyRef = useRef(null);
  const spotlightRef = useRef(null);
  const [randomQuotes, setRandomQuotes] = useState<string[]>([]);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: spotlightProgress } = useScroll({
    target: spotlightRef,
    offset: ["start end", "end start"]
  });

  // Hero parallax logic - refined for depth and strict containment
  const heroFrameY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]); // Internal movement
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  // Spotlight parallax
  const spotlightImageY = useTransform(spotlightProgress, [0, 1], ["-10%", "10%"]);

  useEffect(() => {
    setRandomQuotes([...ALL_QUOTES]);
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % ALL_QUOTES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.9, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const journeySteps = [
    {
      title: "The Clinician",
      phase: "Clinical Foundations",
      desc: "Deep immersion in pharmaceutical sciences, establishing the rigor of clinical precision as the core DNA.",
      icon: Compass,
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: "The Industrialist",
      phase: "Systemic Scaling",
      desc: "Architecting scalable distribution and operational models that redefine healthcare efficiency in India.",
      icon: Shield,
      image: ASSET_INDUSTRIAL_LOGISTICS,
    },
    {
      title: "The Visionary",
      phase: "Institutional Legacy",
      desc: "Constructing Project S Group as a multi-generational governance model for ethical industrialism.",
      icon: Rocket,
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2940&auto=format&fit=crop",
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="overflow-x-hidden bg-white"
    >
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center px-6 lg:px-16 pt-32 pb-24 bg-white overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          
          <motion.div 
            style={{ y: heroTextY, opacity: heroOpacity }}
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="order-2 lg:order-1 text-center lg:text-left relative z-20"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-notion-cream border border-notion-border mb-10 shadow-soft">
              <Sparkles className="w-4 h-4 text-brand-gold animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-sapphire/80">Visionary Entrepreneur & Industrialist</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-tight text-apple-gray mb-10 leading-[0.9] lg:leading-[0.95]">
              Dr. Harish <br />
              <span className="text-brand-sapphire/90">Kamaraj</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl lg:text-3xl text-apple-sub font-light max-w-xl mx-auto lg:mx-0 mb-16 leading-relaxed">
              Architecting <span className="text-brand-sapphire font-semibold">Enduring Institutions</span> through unshakeable ethics and clinical precision.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 justify-center lg:justify-start">
               <Link to="/#ventures" className="px-12 py-6 bg-brand-navy text-white rounded-[24px] font-bold hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-500 flex items-center gap-3 text-lg group">
                 Explore Ventures 
                 <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </Link>
               <Link to="/quotes" className="px-12 py-6 bg-white border border-notion-border text-apple-gray rounded-[24px] font-bold hover:bg-notion-cream hover:border-brand-sapphire/20 transition-all duration-500 shadow-soft text-lg">
                 Thought Leadership
               </Link>
            </motion.div>
          </motion.div>

          {/* Visual Column - Refined Alignment & Clipping */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end w-full">
            <motion.div 
              style={{ scale: heroScale, y: heroFrameY }}
              className="relative w-full max-w-[540px] aspect-[4/5] group flex items-center justify-center"
            >
              {/* Diffuse Sapphire Glow (Background) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-sapphire/[0.05] rounded-full blur-[150px] pointer-events-none group-hover:bg-brand-gold/[0.04] transition-colors duration-1000"></div>

              {/* Glassmorphism Frame + Clipping Container */}
              <div className="relative w-full h-full rounded-[60px] md:rounded-[100px] bg-white/40 backdrop-blur-3xl border border-white/50 shadow-glass overflow-hidden z-10 transition-transform duration-700 group-hover:scale-[1.01] will-change-transform">
                
                {/* Founder Image with Corrected Subject Alignment (85% to show face) */}
                <motion.img 
                  style={{ y: heroImageY }}
                  src={FOUNDER_IMAGE} 
                  alt="Dr. Harish Kamaraj" 
                  referrerPolicy="no-referrer"
                  className="w-full h-[120%] object-cover object-[85%_center] select-none pointer-events-none drop-shadow-[0_40px_80px_rgba(0,0,0,0.18)] transform-gpu will-change-transform"
                />
                
                {/* Bottom Mask to blend image with frame */}
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white/60 via-white/10 to-transparent pointer-events-none"></div>
              </div>

              {/* Float-in Quote Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1.2 }}
                className="absolute bottom-4 lg:bottom-12 left-4 right-4 md:-left-24 md:right-auto md:w-[460px] p-8 md:p-12 bg-white/85 backdrop-blur-2xl border border-notion-border rounded-[48px] text-brand-navy shadow-glass z-30 group-hover:translate-y-[-10px] transition-transform duration-700"
              >
                <div className="relative">
                  <QuoteIcon className="absolute -top-6 -left-6 w-12 h-12 text-brand-gold/20" />
                  <p className="font-serif italic text-xl md:text-2xl lg:text-3xl leading-relaxed mb-6 text-apple-gray">
                    "A leader wins not by doing everything, but by focusing on what builds the future."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-brand-gold/40"></div>
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-sapphire/60">Founder, Medinet Pharma</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Slider */}
      <section className="py-24 lg:py-40 bg-brand-navy text-white overflow-hidden relative border-y border-white/5">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
           <div className="w-full h-full bg-cover bg-center grayscale" style={{ backgroundImage: `url('${ASSET_QUOTE_BG}')` }}></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 min-h-[450px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {randomQuotes.length > 0 && (
              <motion.div
                key={quoteIndex}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 1.02 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <QuoteIcon className="mx-auto mb-14 text-brand-gold w-16 h-16 opacity-80" />
                <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1.15] italic font-medium mb-14 px-4 md:px-0 tracking-tight">
                  "{randomQuotes[quoteIndex]}"
                </h2>
                <div className="flex items-center justify-center gap-10">
                  <span className="h-px w-20 bg-white/10"></span>
                  <Link to="/quotes" className="text-[11px] font-bold tracking-[0.4em] uppercase text-brand-gold hover:text-white transition-all duration-500">
                    Explore Philosophical Foundations
                  </Link>
                  <span className="h-px w-20 bg-white/10"></span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Journey Narrative */}
      <section id="journey" ref={journeyRef} className="py-32 lg:py-52 bg-white scroll-mt-24 border-t border-notion-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-28 lg:mb-40">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-sapphire font-bold tracking-[0.5em] uppercase text-[11px] mb-8 block"
            >
              The Evolution
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-apple-gray tracking-tighter"
            >
              The Founder's Narrative
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
            <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-px bg-brand-sapphire/5"></div>
            
            {journeySteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: idx * 0.2 }}
                className="relative group h-full flex flex-col"
              >
                <div className="flex flex-col items-center md:items-start text-center md:text-left h-full">
                  <div className="w-28 h-28 rounded-[40px] bg-notion-cream border border-notion-border flex items-center justify-center text-brand-sapphire mb-12 shadow-soft group-hover:scale-110 group-hover:bg-brand-navy group-hover:text-white transition-all duration-700 relative z-10 shrink-0">
                    <step.icon size={42} />
                  </div>
                  
                  <div className="bg-white p-12 lg:p-14 rounded-[64px] border border-notion-border shadow-soft group-hover:shadow-3xl transition-all duration-700 overflow-hidden relative flex flex-col flex-grow w-full">
                    <div className="absolute -right-8 -top-8 opacity-[0.02] pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-1000">
                      <step.icon size={220} />
                    </div>
                    
                    <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-brand-gold mb-6 block">
                      {step.phase}
                    </span>
                    <h3 className="text-3xl font-bold text-apple-gray mb-6 tracking-tight">{step.title}</h3>
                    <p className="text-apple-sub leading-relaxed text-xl font-light mb-12 flex-grow">
                      {step.desc}
                    </p>
                    
                    <div className="aspect-[16/10] w-full rounded-[40px] overflow-hidden mt-auto bg-slate-50 border border-notion-border group-hover:shadow-2xl transition-all duration-700">
                      <div 
                        className="w-full h-full bg-cover bg-center grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
                        style={{ backgroundImage: `url('${step.image}')` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prominent Founder Spotlight Section */}
      <section ref={spotlightRef} className="relative py-40 lg:py-64 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-7 relative order-2 lg:order-1">
              <motion.div 
                style={{ y: spotlightImageY }}
                className="relative aspect-[3/4] md:aspect-[16/10] lg:aspect-[4/5] rounded-[80px] overflow-hidden group shadow-4xl bg-notion-cream"
              >
                <div className="absolute inset-0 bg-brand-navy/10 z-10 group-hover:bg-transparent transition-colors duration-1000"></div>
                
                <img src={FOUNDER_IMAGE} 
                      alt="Dr. Harish Kamaraj Vision" 
                      referrerPolicy="no-referrer"
                      className="
                        w-full h-full
                        object-contain
                        object-[75%_20%]
                        filter grayscale
                        group-hover:grayscale-0
                        transition-all duration-1000
                        scale-[1.02]
                        group-hover:scale-[1.06]
                      "
                    />

                
                {/* Visual Accent */}
                <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-[40px] z-20">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-white shrink-0">
                       <Sparkles size={20} />
                     </div>
                     <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white">Institutional Blueprint 2025</span>
                   </div>
                </div>
              </motion.div>

              {/* Decorative Background Elements */}
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-sapphire/5 rounded-full blur-[120px] pointer-events-none"></div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-brand-gold font-bold tracking-[0.6em] uppercase text-[11px] mb-8 block"
              >
                Executive Philosophy
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-serif text-5xl md:text-7xl font-bold text-apple-gray mb-12 tracking-tight leading-[1.1]"
              >
                The Architecture of <span className="text-brand-sapphire italic">Legacy</span>
              </motion.h2>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8 relative"
              >
                <QuoteIcon className="text-brand-gold/10 w-24 h-24 absolute -top-12 -left-8 pointer-events-none" />
                <p className="text-2xl md:text-3xl text-apple-gray font-serif italic leading-relaxed relative z-10">
                  "True industry is not about the products we manufacture today, but the integrity of the systems we leave behind for tomorrow. We are architects of permanence."
                </p>
                
                <div className="pt-10 flex flex-col gap-10">
                   <p className="text-apple-sub text-xl leading-relaxed font-light">
                     Dr. Harish's commitment to ethical industrialism is the cornerstone of Project S. By prioritizing systemic resilience over rapid speculation, he ensures that every venture serves as a foundation for societal progress.
                   </p>

                   <Link to="/about" className="group inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.4em] uppercase text-brand-navy hover:text-brand-gold transition-colors duration-500">
                     Discover the Founder's Journey
                     <div className="w-12 h-12 rounded-full border border-brand-navy/10 flex items-center justify-center group-hover:border-brand-gold group-hover:translate-x-2 transition-all duration-500">
                        <MoveRight size={16} />
                     </div>
                   </Link>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Strategic Ventures - Unified Dark Theme for both cards */}
      <section id="ventures" className="py-32 lg:py-52 px-6 bg-notion-cream/30 scroll-mt-24 border-t border-notion-border overflow-hidden">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <div className="max-w-3xl text-center md:text-left">
              <span className="text-brand-sapphire font-bold tracking-[0.5em] uppercase text-xs mb-8 block">The Holdings</span>
              <h2 className="text-5xl md:text-7xl font-bold text-apple-gray leading-tight tracking-tight">Institutional Portfolio</h2>
              <p className="text-apple-sub mt-10 text-2xl font-light leading-relaxed">
                Strategic architecture for multi-generational growth and systemic impact.
              </p>
            </div>
            <Link to="/mission" className="px-12 py-6 bg-white border border-notion-border text-apple-gray rounded-[24px] font-bold text-lg hover:text-brand-sapphire transition-all shadow-soft shrink-0 flex items-center gap-3">
              Institutional Vision <ArrowUpRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
            {/* Card 1: Project S (Unified Theme) */}
            <div className="group block h-full">
              <motion.div 
                className="rounded-[72px] overflow-hidden border border-white/5 bg-brand-navy shadow-4xl h-full flex flex-col"
              >
                <div className="aspect-[16/10] bg-brand-sapphire/20 relative overflow-hidden shrink-0 border-b border-white/5">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
                    style={{ backgroundImage: `url('${ASSET_PROJECT_S_GOVERNANCE}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-brand-navy/30"></div>
                </div>
                <div className="p-16 flex flex-col flex-grow text-white">
                  <h3 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Project S</h3>
                  <p className="text-brand-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-8">Under Development</p>
                  <p className="text-slate-400 text-xl font-light leading-relaxed flex-grow">
                    The parent governance institution designed to anchor all industrial ventures in unshakeable systemic sovereignty.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Card 2: Medinet Pharmaceutical (Theme Matching Project S - Clinical Focus) */}
            <div className="group block h-full">
              <motion.div 
                className="rounded-[72px] overflow-hidden border border-white/5 bg-brand-navy shadow-4xl h-full flex flex-col"
              >
                <div className="aspect-[16/10] bg-brand-sapphire/20 relative overflow-hidden shrink-0 border-b border-white/5">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
                    style={{ backgroundImage: `url('${ASSET_MEDINET_CLINICAL}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-brand-navy/30"></div>
                </div>
                <div className="p-16 flex flex-col flex-grow text-white">
                  <h3 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight">Medinet Pharmaceutical</h3>
                  <p className="text-slate-400 text-xl mb-12 font-light leading-relaxed">
                    A parent pharmaceutical umbrella currently operating three core strategic verticals:
                  </p>
                  
                  <div className="space-y-6 flex-grow">
                    <div className="flex items-center gap-4 text-slate-300 text-xl lg:text-2xl font-light opacity-80">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0"></span>
                      Medinet Pharmacy
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0"></span>
                      <Link 
                        to="/" 
                        className="text-white text-xl lg:text-2xl font-light hover:text-brand-gold transition-colors flex items-center gap-2 group/link"
                      >
                        Medinet Pharma 
                        <ArrowUpRight size={18} className="opacity-40 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                      </Link>
                    </div>
                    
                    <div className="flex items-center gap-4 text-slate-300 text-xl lg:text-2xl font-light opacity-80">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0"></span>
                      Medinet Super Speciality Clinic
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default Home;