import React from 'react';
import { BrandColor, DesignSystemColor } from '../types';
import { motion } from 'framer-motion';

const DesignSystem: React.FC = () => {
  const colors: DesignSystemColor[] = [
    { name: 'Legacy Navy', hex: '#0f172a', psychology: 'Represents authority, depth, stability, and corporate seriousness. It grounds the brand in professionalism.', usage: 'Primary Text, Headings, Footer, Hero Backgrounds' },
    { name: 'Clinical Teal', hex: '#0d9488', psychology: 'Evokes health, growth, renewal, and pharmaceutical precision. A bridge between science and nature.', usage: 'Primary Actions, Highlights, Links, Icons' },
    { name: 'Heritage Gold', hex: '#d97706', psychology: 'Signifies legacy, quality, and the "Gold Standard" of ethics. Used sparingly to denote value.', usage: 'Borders, Accents, Keyline separators' },
    { name: 'Sterile Cream', hex: '#f8fafc', psychology: 'Provides a clean, clinical canvas. Reduces eye strain compared to pure white. Represents transparency.', usage: 'Page Backgrounds, Panels' },
    { name: 'Neutral Grey', hex: '#64748b', psychology: 'Balance and neutrality. Used for supporting text to maintain hierarchy without visual noise.', usage: 'Body Text, Subtitles' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen pb-20"
    >
      <div className="bg-slate-100 border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-brand-navy mb-4">Project S Design System</h1>
          <p className="text-slate-600 max-w-2xl">
            A codified visual language ensuring consistency, authority, and ethical representation across all media.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Brand Personality */}
        <section>
          <h2 className="text-2xl font-bold text-brand-navy mb-8 border-b pb-2">Brand Personality</h2>
          <div className="flex flex-wrap gap-4">
            {['Visionary', 'Ethical', 'Structured', 'Clinical', 'Executive', 'Timeless', 'Resilient'].map((trait) => (
              <span key={trait} className="px-6 py-3 bg-brand-navy text-white rounded-full text-sm font-medium tracking-wide">
                {trait}
              </span>
            ))}
          </div>
        </section>

        {/* Color Palette */}
        <section>
          <h2 className="text-2xl font-bold text-brand-navy mb-8 border-b pb-2">Color Psychology & Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colors.map((c) => (
              <div key={c.name} className="border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                <div className="h-32 w-full" style={{ backgroundColor: c.hex }}></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-lg text-brand-navy">{c.name}</h3>
                    <code className="bg-slate-100 px-2 py-1 rounded text-xs text-slate-500">{c.hex}</code>
                  </div>
                  <p className="text-sm text-slate-600 mb-4 italic">"{c.psychology}"</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Usage: {c.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-2xl font-bold text-brand-navy mb-8 border-b pb-2">Typography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Headings (Serif)</span>
              <div className="space-y-6">
                <div>
                  <p className="text-4xl md:text-5xl font-serif font-bold text-brand-navy">Display Heading</p>
                  <p className="text-sm text-slate-400 mt-1">Playfair Display / Bold / Tight Tracking</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-brand-navy">Section Title</p>
                  <p className="text-sm text-slate-400 mt-1">Playfair Display / SemiBold</p>
                </div>
              </div>
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Body (Sans-Serif)</span>
              <div className="space-y-6">
                <div>
                  <p className="text-lg text-slate-700 font-sans">
                    The quick brown fox jumps over the lazy dog. Primary body text is highly legible, modern, and clean.
                  </p>
                  <p className="text-sm text-slate-400 mt-1">Inter / Regular / Relaxed Line Height</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-sans font-medium uppercase tracking-wider">
                    Caption or Label Text
                  </p>
                  <p className="text-sm text-slate-400 mt-1">Inter / Medium / Uppercase / Wide Tracking</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UI Style */}
        <section>
          <h2 className="text-2xl font-bold text-brand-navy mb-8 border-b pb-2">UI Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-slate-600">
            <div className="bg-slate-50 p-6">
              <h4 className="font-bold text-brand-navy mb-2">Clean Lines</h4>
              <p>Interfaces use sharp corners, ample whitespace, and thin dividers (1px). Shadows are diffuse and subtle, used only for elevation.</p>
            </div>
            <div className="bg-slate-50 p-6">
              <h4 className="font-bold text-brand-navy mb-2">Restrained Motion</h4>
              <p>Animations are limited to slow fades (300ms) and gentle slides. No bouncy or spring physics. The feeling must be stable and calm.</p>
            </div>
            <div className="bg-slate-50 p-6">
              <h4 className="font-bold text-brand-navy mb-2">Photography</h4>
              <p>Images should be desaturated or cool-toned. Avoid high-contrast stock photos. Focus on architecture, textures, and professional settings.</p>
            </div>
          </div>
        </section>

      </div>
    </motion.div>
  );
};

export default DesignSystem;