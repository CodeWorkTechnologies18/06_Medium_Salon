import React from 'react';
import { Scissors, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <Scissors className="text-accent" size={30} />
              <span className="text-2xl font-serif font-bold tracking-tighter">
                LUMINA<span className="text-accent">SALON</span>
              </span>
            </div>
            <p className="text-light/50 font-light leading-relaxed mb-8">
              Premium grooming and hair services for the modern individual. Elevating your style and confidence since 2012.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 hover:bg-accent hover:text-white transition-all duration-300 rounded-full">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-3 bg-white/5 hover:bg-accent hover:text-white transition-all duration-300 rounded-full">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-3 bg-white/5 hover:bg-accent hover:text-white transition-all duration-300 rounded-full">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-8 relative inline-block">
              Navigation
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-accent"></span>
            </h4>
            <ul className="space-y-4 text-light/50 font-light">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xl mb-8 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-accent"></span>
            </h4>
            <ul className="space-y-4 text-light/50 font-light">
              <li>Haircut & Styling</li>
              <li>Beard Sculpting</li>
              <li>Facial Treatments</li>
              <li>Hair Coloring</li>
              <li>Bridal Styling</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl mb-8 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-accent"></span>
            </h4>
            <ul className="space-y-6 text-light/50 font-light">
              <li className="flex gap-4">
                <Phone size={18} className="text-accent shrink-0" />
                <span>+1 (212) 555-0198</span>
              </li>
              <li className="flex gap-4">
                <Mail size={18} className="text-accent shrink-0" />
                <span>appointments@lumina.com</span>
              </li>
              <li className="flex gap-4">
                <div className="text-accent shrink-0 font-bold text-xs uppercase pt-1">Mon - Sat</div>
                <span>09:00 AM - 08:00 PM</span>
              </li>
              <li className="flex gap-4">
                <div className="text-accent shrink-0 font-bold text-xs uppercase pt-1">Sun</div>
                <span>10:00 AM - 04:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4 text-light/30 text-[10px] uppercase tracking-[0.2em] font-bold">
          <p>© 2026 LUMINA SALON BY ANTIGRAVITY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
