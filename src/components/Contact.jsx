import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left: Info */}
          <div className="w-full lg:w-1/3">
            <span className="text-accent uppercase tracking-widest text-sm mb-4 block font-medium">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl text-dark font-serif mb-10">We'd Love to Hear From You</h2>
            <div className="w-20 h-[2px] bg-accent mb-12"></div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-accent/10 p-4 text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Our Location</h4>
                  <p className="text-gray-500 font-light">123 Elysian Avenue, <br />Suite 405, Manhattan, NY</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-accent/10 p-4 text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Phone</h4>
                  <p className="text-gray-500 font-light">+1 (212) 555-0198</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-accent/10 p-4 text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Email</h4>
                  <p className="text-gray-500 font-light">appointments@lumina.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-2/3">
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-light p-10 lg:p-16 shadow-2xl"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Full Name</label>
                <input type="text" className="bg-transparent border-b border-gray-300 py-3 focus:border-accent outline-none transition-colors" placeholder="e.g. Jane Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Email Address</label>
                <input type="email" className="bg-transparent border-b border-gray-300 py-3 focus:border-accent outline-none transition-colors" placeholder="jane@example.com" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Select Service</label>
                <select className="bg-transparent border-b border-gray-300 py-3 focus:border-accent outline-none transition-colors appearance-none">
                  <option>Haircut & Styling</option>
                  <option>Beard Grooming</option>
                  <option>Facials & Skincare</option>
                  <option>Hair Coloring</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Message (Optional)</label>
                <textarea rows="4" className="bg-transparent border-b border-gray-300 py-3 focus:border-accent outline-none transition-colors resize-none" placeholder="Is there anything else we should know?"></textarea>
              </div>
              <div className="md:col-span-2 pt-6">
                <button className="btn-primary flex items-center gap-4">
                  Send Message <Send size={16} />
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
