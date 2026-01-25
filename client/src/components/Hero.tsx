import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Unsplash image: Lush green forest roots/trees for 'Rooted in Heritage' */}
        <img 
          src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop" 
          alt="Nature roots background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/90 text-white text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-sm">
            Est. 2024
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-6 drop-shadow-lg">
            Rooted in Heritage,<br />
            <span className="text-accent-foreground/90 italic">Growing Together.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-md">
            A professional community fostering growth, mentorship, and cultural identity for the modern era.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
