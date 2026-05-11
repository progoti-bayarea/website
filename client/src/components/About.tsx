import { Section } from "./ui/section";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <Section id="about" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl mb-6 text-primary">Who We Are</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Progoti</strong> is a dynamic affiliate program under the {" "}
              <a
                href="https://aobforum.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Association of Bengalis (AoB)
              </a>,
              designed to bridge the gap between our rich cultural heritage and modern professional aspirations.
            </p>
            <p>
              We believe that professional growth doesn't happen in isolation. It requires a village—a community
              that understands where you come from and supports where you're going. Progoti serves as that
              bridge, connecting established leaders with emerging talent in an environment of mutual respect
              and shared values.
            </p>
            <p>
              Whether you are a seasoned executive, a mid-career professional, or just starting out,
              Progoti offers a space to network, learn, and give back to the community that shaped you.
            </p>
          </div>

          <div className="mt-10 flex gap-6 md:gap-10 flex-wrap">
            {[
              { value: "Bay Area", label: "Based in" },
              { value: "AoB", label: "Affiliate of" },
              { value: "2025", label: "Founded" },
            ].map(({ value, label }, i) => (
              <>
                {i > 0 && <div key={`sep-${i}`} className="w-px bg-border" />}
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 16, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
                >
                  <div className="text-4xl font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>{value}</div>
                  <div className="text-sm text-muted-foreground mt-1 uppercase tracking-widest">{label}</div>
                </motion.div>
              </>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          
          <div className="relative bg-secondary/30 rounded-2xl p-6 sm:p-8 md:p-12 border border-border">
            <Quote className="w-12 h-12 text-accent mb-6 opacity-50" />
            <blockquote className="font-display text-xl sm:text-2xl md:text-3xl text-foreground font-medium leading-snug">
              "To preserve our roots is not to stand still, but to draw strength for our future growth."
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Our Philosophy</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
