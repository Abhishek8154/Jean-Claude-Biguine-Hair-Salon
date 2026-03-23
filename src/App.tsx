import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Scissors, 
  Sparkles, 
  Wind, 
  ChevronRight, 
  Menu, 
  X,
  Star,
  ExternalLink
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <span className={cn(
            "text-2xl font-serif tracking-widest uppercase leading-none",
            isScrolled ? "text-luxury-black" : "text-white"
          )}>
            Jean-Claude Biguine
          </span>
          <span className={cn(
            "text-[10px] tracking-[0.3em] uppercase mt-1",
            isScrolled ? "text-gold" : "text-gold-light"
          )}>
            Bhopal • Paris
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-xs uppercase tracking-widest font-medium transition-colors hover:text-gold",
                isScrolled ? "text-luxury-black" : "text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:09826249229"
            className={cn(
              "px-6 py-2 border text-xs uppercase tracking-widest transition-all",
              isScrolled 
                ? "border-luxury-black text-luxury-black hover:bg-luxury-black hover:text-white" 
                : "border-white text-white hover:bg-white hover:text-luxury-black"
            )}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-luxury-black" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-luxury-black" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl p-8 flex flex-col space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-luxury-black border-b border-gray-100 pb-2"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:09826249229"
              className="bg-luxury-black text-white py-4 text-center text-xs uppercase tracking-widest"
            >
              Call to Book
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1920&auto=format&fit=crop" 
          alt="Salon Interior" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold-light uppercase tracking-[0.4em] text-xs mb-6 block">
            Excellence in Beauty since 1982
          </span>
          <h1 className="text-5xl md:text-8xl text-white font-serif mb-8 leading-tight">
            The Art of <br />
            <span className="italic">French Beauty</span>
          </h1>
          <p className="text-white/80 text-sm md:text-lg max-w-xl mx-auto mb-10 font-light tracking-wide leading-relaxed">
            Experience the pinnacle of luxury hair care and spa treatments in the heart of Arera Colony, Bhopal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#services"
              className="bg-gold hover:bg-gold-light text-white px-10 py-4 text-xs uppercase tracking-[0.2em] transition-all w-full sm:w-auto"
            >
              Explore Services
            </a>
            <a 
              href="tel:09826249229"
              className="border border-white text-white hover:bg-white hover:text-luxury-black px-10 py-4 text-xs uppercase tracking-[0.2em] transition-all w-full sm:w-auto"
            >
              Book Appointment
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-12 bg-white/30 mx-auto mb-2" />
        <span className="text-[8px] uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, image }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative overflow-hidden bg-white shadow-sm"
  >
    <div className="aspect-[4/5] overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-luxury-black/20 group-hover:bg-luxury-black/40 transition-colors" />
    </div>
    <div className="absolute bottom-0 left-0 w-full p-8 text-white">
      <Icon className="w-8 h-8 mb-4 text-gold-light" />
      <h3 className="text-2xl font-serif mb-2">{title}</h3>
      <p className="text-sm text-white/80 font-light mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {description}
      </p>
      <button className="text-[10px] uppercase tracking-widest flex items-center group/btn">
        Learn More <ChevronRight className="w-3 h-3 ml-1 transition-transform group-hover/btn:translate-x-1" />
      </button>
    </div>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Hair Couture",
      description: "Precision cuts, bespoke coloring, and French styling techniques tailored to your unique personality.",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Sparkles,
      title: "Skin & Spa",
      description: "Rejuvenating facials and body treatments using premium French products for a radiant glow.",
      image: "https://images.unsplash.com/photo-1544161515-450a19ad4613?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Wind,
      title: "Nail Bar",
      description: "Luxury manicures and pedicures with artistic finishes and long-lasting care.",
      image: "https://images.unsplash.com/photo-1604654894610-df490668711d?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-luxury-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-6xl font-serif">Signature Services</h2>
          <div className="w-24 h-[1px] bg-gold/30 mx-auto mt-6" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 relative">
          <div className="relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop" 
              alt="Salon Experience" 
              className="w-full aspect-[4/5] object-cover shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-gold/5 -z-0" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-gold/20 -z-0" />
          
          <div className="absolute bottom-10 -right-10 bg-luxury-black p-8 text-white hidden lg:block max-w-xs">
            <Star className="text-gold mb-4 fill-gold" />
            <p className="text-sm font-light italic leading-relaxed">
              "The best salon experience in Bhopal. The French techniques and attention to detail are unmatched."
            </p>
            <p className="text-[10px] uppercase tracking-widest mt-4 text-gold">— Regular Client</p>
          </div>
        </div>
        
        <div className="flex-1">
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] mb-4 block">The Biguine Legacy</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">French Elegance <br />in Bhopal</h2>
          <p className="text-luxury-black/70 font-light leading-relaxed mb-6">
            Jean-Claude Biguine Paris brings its world-class expertise to Bhopal, offering a unique blend of French aesthetics and personalized care. Our salon is more than just a place for beauty; it's a sanctuary where style meets relaxation.
          </p>
          <p className="text-luxury-black/70 font-light leading-relaxed mb-10">
            Located in the prestigious Arera Colony, we provide an international standard of service, using only the finest products and techniques developed in the fashion capital of the world.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
              <h4 className="text-3xl font-serif text-gold mb-1">40+</h4>
              <p className="text-[10px] uppercase tracking-widest text-luxury-black/50">Years of Global Heritage</p>
            </div>
            <div>
              <h4 className="text-3xl font-serif text-gold mb-1">15+</h4>
              <p className="text-[10px] uppercase tracking-widest text-luxury-black/50">Expert Stylists</p>
            </div>
          </div>
          
          <button className="group flex items-center text-xs uppercase tracking-[0.2em] font-semibold">
            Our Story <div className="w-12 h-[1px] bg-luxury-black ml-4 transition-all group-hover:w-20" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] mb-4 block">Visual Journey</span>
          <h2 className="text-4xl md:text-6xl font-serif">The Salon Gallery</h2>
          <div className="w-24 h-[1px] bg-gold/30 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square overflow-hidden bg-gray-100"
            >
              <img 
                src={img} 
                alt={`Gallery ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-luxury-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center">
                  <Sparkles className="text-white w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-luxury-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] mb-4 block">Visit Us</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-12">Get in Touch</h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gold mb-2">Location</h4>
                  <p className="text-white/60 font-light leading-relaxed">
                    10 No. Market, Krishna emporio, <br />
                    above StarBucks and KFC, E-4, <br />
                    Arera Colony, Bhopal, MP 462016
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/zAkaW5h8dakvcoJK6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[10px] uppercase tracking-widest text-white mt-4 hover:text-gold transition-colors"
                  >
                    View on Google Maps <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gold mb-2">Phone</h4>
                  <p className="text-white/60 font-light">09826249229</p>
                  <p className="text-[10px] text-white/40 mt-1 uppercase tracking-widest">Call for appointments</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gold mb-2">Hours</h4>
                  <p className="text-white/60 font-light">Mon - Sun: 10:00 AM - 09:00 PM</p>
                  <p className="text-[10px] text-white/40 mt-1 uppercase tracking-widest">Open all week</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-6 mt-16">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="bg-white/5 p-10 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-serif mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-gold outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Phone Number</label>
                  <input type="tel" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-gold outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Service Interested In</label>
                <select className="w-full bg-transparent border-b border-white/20 py-2 focus:border-gold outline-none transition-colors appearance-none">
                  <option className="bg-luxury-black">Hair Care</option>
                  <option className="bg-luxury-black">Skin & Spa</option>
                  <option className="bg-luxury-black">Nail Services</option>
                  <option className="bg-luxury-black">Bridal Packages</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-2 focus:border-gold outline-none transition-colors resize-none" />
              </div>
              <button className="w-full bg-gold hover:bg-gold-light text-white py-4 text-xs uppercase tracking-widest transition-all mt-4">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-luxury-black py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-serif tracking-widest uppercase text-white">Jean-Claude Biguine</span>
          <span className="text-[8px] tracking-[0.3em] uppercase mt-1 text-gold">Bhopal</span>
        </div>
        
        <div className="text-[10px] uppercase tracking-widest text-white/30 text-center md:text-right">
          © {new Date().getFullYear()} Jean-Claude Biguine Bhopal. All Rights Reserved.
          <br />
          <span className="mt-2 block">Designed with Elegance</span>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
