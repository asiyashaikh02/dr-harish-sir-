import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComingSoon: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[80vh] flex items-center justify-center bg-white px-6"
    >
      <div className="text-center max-w-lg">
        <div className="bg-notion-cream w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-soft">
          <Construction className="text-brand-sapphire/50" size={32} />
        </div>
        
        <h1 className="font-serif text-4xl font-bold text-apple-gray mb-4">
          Under Development
        </h1>
        
        <p className="text-apple-sub text-lg mb-10 leading-relaxed">
          This section of the Project S ecosystem is currently being prepared for public release. We believe in launching only when systems are perfected.
        </p>

        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-8 py-3 bg-apple-gray text-white rounded-full font-medium hover:bg-brand-sapphire transition-colors duration-300"
        >
          <ArrowLeft size={18} />
          Return Home
        </Link>
      </div>
    </motion.div>
  );
};

export default ComingSoon;