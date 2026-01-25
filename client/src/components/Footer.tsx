import logoImg from "@assets/Progoti_thumbnail_header_logo_1769321841361.png";
import { Linkedin, Mail, Instagram, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/50 pt-16 pb-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <img src={logoImg} alt="Progoti" className="h-12 w-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-sm">
              Rooted in heritage, growing together. Building a professional community 
              that honors our past while innovating for the future.
            </p>
          </div>
          
          <div>
            <h3 className="font-display text-xl font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#mission" className="text-muted-foreground hover:text-primary transition-colors">Our Mission</a></li>
              <li><a href="#team" className="text-muted-foreground hover:text-primary transition-colors">Leadership</a></li>
              <li><a href="#events" className="text-muted-foreground hover:text-primary transition-colors">Events</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-xl font-semibold mb-4 text-primary">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/progoti-bay-area" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-primary shadow-sm hover:shadow-md hover:bg-primary hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/progoti_bayarea/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-primary shadow-sm hover:shadow-md hover:bg-primary hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:contact@progoti.org" className="p-2 bg-white rounded-full text-primary shadow-sm hover:shadow-md hover:bg-primary hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-2">Parent Organisation:</p>
              <a 
                href="https://aobforum.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                AoB Forum <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Progoti. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Part of the <a href="https://aobforum.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline decoration-primary/30">Association of Bengalis (AoB)</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
