import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import logoImg from "@assets/Progoti_full_logo_(1)_1769319651184.png";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop" 
          alt="Nature roots background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
              <img 
                src={logoImg} 
                alt="Progoti Full Logo" 
                className="w-64 md:w-80 lg:w-96 h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 max-w-2xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/90 text-white text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-sm">
              Est. 2024
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-white font-bold leading-tight mb-6 drop-shadow-lg">
              What is <span className="text-accent-foreground">Progoti</span>?
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-light leading-relaxed drop-shadow-md">
              Progoti is a professional network for Bengali-origin early-career professionals. 
              We aim to connect members across diverse fields, foster mentorship, and celebrate cultural heritage 
              while enabling career growth and collaboration.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a 
                href="#connect"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg shadow-xl shadow-primary/30 hover:bg-primary/90 hover:scale-105 transition-all duration-300"
              >
                Join the Community
              </a>
              <a 
                href="#about"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ArrowDown className="w-8 h-8" />
      </motion.div>
    </div>
  );
}
