import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 scale-110"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent uppercase tracking-[0.3em] font-medium text-sm mb-6 block"
        >
          Welcome to Lumina Salon
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl text-white font-serif mb-8 leading-tight"
        >
          Style That <br />
          <span className="italic">Defines You</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-light/80 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto"
        >
          Experience excellence in hair and grooming services with our master stylists in a premium boutique environment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button className="btn-primary scale-110">Book an Appointment Now</button>
        </motion.div>
      </div>

      {/* Decorative arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center">
        <div className="w-[1px] h-12 bg-accent/50 mb-2"></div>
        <span className="text-accent text-[10px] uppercase tracking-widest vertical-rl">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
