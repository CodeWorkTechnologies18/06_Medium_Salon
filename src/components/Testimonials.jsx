import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Fashion Designer',
    text: 'The experience at Lumina is truly unparalleled. I have never found a stylist who understands my hair texture so well. The atmosphere is just the cherry on top.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'David Miller',
    role: 'Corporate Executive',
    text: 'A proper gentlemans haircut is hard to find. These guys nailed it. The beard grooming service is a must-try. Very professional and clean.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Elena Thorne',
    role: 'Modern Artist',
    text: 'I came in for a bold color change and was blown away. The colorists here are real artists. My hair feels healthier than ever despite the bleaching.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-dark text-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-widest text-sm mb-4 block font-medium">Voices of Approval</span>
          <h2 className="text-4xl md:text-5xl font-serif">What Our Clients Say</h2>
          <div className="w-20 h-[2px] bg-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 relative group hover:bg-white/10 transition-colors"
            >
              <Quote className="absolute top-6 right-6 text-accent/20 group-hover:text-accent/40 transition-colors" size={40} />
              
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>

              <p className="text-light/70 italic mb-8 leading-relaxed font-light">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale" />
                <div>
                  <h4 className="font-serif text-lg">{t.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-accent font-bold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
