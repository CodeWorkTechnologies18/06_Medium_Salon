import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px]">
          <img 
            src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg" 
            alt="Salon Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent/10 mix-blend-multiply"></div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 p-8 lg:p-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-accent uppercase tracking-widest text-sm mb-4 block font-medium">Since 2012</span>
            <h2 className="text-4xl md:text-5xl text-dark font-serif mb-8 leading-tight">Crafting Excellence in Every <span className="italic">Cut and Style</span></h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              At Lumina Salon, we believe that hair is the ultimate canvas for self-expression. Our team of master stylists combines years of classical training with modern techniques to deliver looks that are both timeless and on-trend.
            </p>
            
            <p className="text-gray-600 mb-10 leading-relaxed font-light">
              We provide a sanctuary of luxury where every client receives personalized attention. From the moment you step in, our mission is to make you feel as exceptional as you look.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-10">
              <div>
                <h4 className="text-3xl font-serif text-accent mb-2">15+</h4>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Expert Stylists</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-accent mb-2">12k+</h4>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Happy Clients</p>
              </div>
            </div>
            
            <button className="mt-12 btn-primary">Learn Our Story</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
