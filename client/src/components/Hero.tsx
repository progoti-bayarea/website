import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import logoImg from "@assets/progoti-logo-transparent.png";

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0 relative"
          >
            <div
              className="w-52 sm:w-64 md:w-80 lg:w-96"
              style={{ aspectRatio: "1 / 1" }}
            >
              <img
                src={logoImg}
                alt="Progoti Full Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-2 drop-shadow-lg break-words">
              Progoti
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/70 mb-4 md:mb-6 font-bold tracking-wide drop-shadow-md uppercase">
              Rooted in Heritage, Growing Together
            </p>
            <p className="text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-8 font-bold leading-relaxed drop-shadow-md">
              A professional network for early-career professionals — connecting members across diverse fields,
              fostering mentorship, and celebrating cultural heritage.
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
