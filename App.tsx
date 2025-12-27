import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Linkedin, Instagram, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Mission from './pages/Mission';
import Vision from './pages/Vision';
import Manifesto from './pages/Manifesto';
import LongTerm from './pages/LongTerm';
import DesignSystem from './pages/DesignSystem';
import Home from './pages/Home';
import ComingSoon from './pages/ComingSoon';
import Quotes from './pages/Quotes';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Thoughts', path: '/quotes' },
    { label: 'Ventures', path: '/#ventures' },
    { label: 'Contact', path: '/#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-white/85 backdrop-blur-xl border-b border-notion-border shadow-[0_1px_2px_rgba(0,0,0,0.02)] py-4' 
          : 'bg-transparent py-6 lg:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-12">
          <Link to="/" className="flex flex-col group relative z-10">
            <span className="font-sans text-lg lg:text-xl font-bold tracking-tight text-apple-gray group-hover:text-brand-sapphire transition-colors duration-300">
              Dr. Harish Kamaraj
            </span>
            <span className="text-[9px] tracking-[0.3em] uppercase text-apple-sub font-bold opacity-80 group-hover:text-brand-gold transition-colors duration-300">
              Founder & Industrialist
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-xs font-bold tracking-[0.15em] uppercase text-apple-gray hover:text-brand-sapphire transition-all duration-300 relative group cursor-pointer py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold/60 transition-all duration-500 group-hover:w-full"></span>
              </Link>
            ))}
            <Link 
              to="/manifesto"
              className="px-8 py-3 rounded-full bg-apple-gray text-white text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-brand-sapphire transition-all duration-500 shadow-xl shadow-black/5 hover:-translate-y-0.5"
            >
              The Manifesto
            </Link>
          </div>

          <div className="md:hidden relative z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-apple-gray hover:text-brand-sapphire transition-colors focus:outline-none bg-white/50 backdrop-blur-md rounded-full"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 md:hidden bg-white/98 backdrop-blur-2xl border-b border-notion-border shadow-2xl overflow-hidden"
          >
            <div className="px-8 py-12 space-y-6 flex flex-col items-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="w-full text-center"
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-bold tracking-tight text-apple-gray hover:text-brand-sapphire py-3 block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="w-full"
              >
                <Link 
                  to="/manifesto"
                  onClick={() => setIsOpen(false)}
                  className="mt-6 px-10 py-5 rounded-[20px] bg-brand-sapphire text-white text-xs font-bold tracking-widest uppercase w-full text-center block shadow-lg"
                >
                  Read Manifesto
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-notion-cream pt-32 pb-16 border-t border-notion-border scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-20"
        >
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold mb-6 block">Direct Engagement</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-apple-gray mb-8 tracking-tight">
            Initiate Collaboration
          </h2>
          <p className="text-xl text-apple-sub mb-12 font-light leading-relaxed">
            Building bridges between clinical science and industrial scale. Open for high-level strategic partnerships and systemic institutional collaboration.
          </p>
          
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/harishkamaraj1717/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-white rounded-full shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-apple-gray hover:text-brand-sapphire group border border-notion-border"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="https://www.instagram.com/dr_hari_sh_74/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-white rounded-full shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-apple-gray hover:text-brand-sapphire group border border-notion-border"
              aria-label="Instagram Profile"
            >
              <Instagram size={22} />
            </a>
            <a 
              href="mailto:harishkamaraj1717@gmail.com" 
              className="p-5 bg-white rounded-full shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-apple-gray hover:text-brand-sapphire border border-notion-border"
              aria-label="Email Contact"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-[0.2em] uppercase text-apple-sub/60 border-t border-notion-border pt-12">
          <span>&copy; {new Date().getFullYear()} Dr. Harish Kamaraj · Medinet Pharmaceutical Verticals</span>
          <div className="flex gap-8 mt-6 md:mt-0">
             <Link to="/design-system" className="hover:text-brand-sapphire transition-colors duration-300">Design System</Link>
             <Link to="/long-term" className="hover:text-brand-sapphire transition-colors duration-300">20-Year Horizon</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans bg-white text-apple-gray selection:bg-brand-sapphire/10 selection:text-brand-sapphire overflow-x-hidden">
        <Navigation />
        <main className="flex-grow pt-10">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/quotes" element={<Quotes />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/manifesto" element={<Manifesto />} />
              <Route path="/long-term" element={<LongTerm />} />
              <Route path="/design-system" element={<DesignSystem />} />
              <Route path="/coming-soon" element={<ComingSoon />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;