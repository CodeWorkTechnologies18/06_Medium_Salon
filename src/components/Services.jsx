import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, User, Sparkles, Smile, Brush, Clock } from 'lucide-react';

const services = [
  {
    icon: <Scissors size={32} />,
    title: 'Haircut',
    description: 'Precision cuts tailored to your face shape and lifestyle.',
    price: '$45+'
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Hair Styling',
    description: 'Professional blowouts, updos and styling for any occasion.',
    price: '$60+'
  },
  {
    icon: <User size={32} />,
    title: 'Beard Grooming',
    description: 'Traditional hot towel straight razor shaves and trims.',
    price: '$30+'
  },
  {
    icon: <Clock size={32} />,
    title: 'Facial',
    description: 'Rejuvenating treatments for clear and healthy skin.',
    price: '$80+'
  },
  {
    icon: <Brush size={32} />,
    title: 'Hair Coloring',
    description: 'From subtle balayage to bold transformations.',
    price: '$120+'
  },
  {
    icon: <Smile size={32} />,
    title: 'Full Treatment',
    description: 'Complete grooming package for the ultimate refresh.',
    price: '$180+'
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-widest text-sm mb-4 block font-medium">What We Offer</span>
          <h2 className="text-4xl md:text-5xl text-dark font-serif">Exquisite Services</h2>
          <div className="w-20 h-[2px] bg-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-gray-100 group hover:border-accent/30 transition-all duration-500 bg-white hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex justify-between items-center pt-6 border-t border-gray-50">
                <span className="font-serif italic text-accent text-xl">{service.price}</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold group-hover:text-dark transition-colors">Book Now →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
