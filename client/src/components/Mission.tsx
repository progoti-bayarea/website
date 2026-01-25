import { Section } from "./ui/section";
import { Users, Sprout, Briefcase, GraduationCap } from "lucide-react";

const objectives = [
  {
    icon: Users,
    title: "Professional Network",
    description: "Building a robust network of professionals across industries to facilitate collaboration and opportunity sharing."
  },
  {
    icon: Briefcase,
    title: "Career Growth",
    description: "Providing resources, workshops, and career counseling to help members advance in their respective fields."
  },
  {
    icon: Sprout,
    title: "Cultural Identity",
    description: "Celebrating our heritage while navigating the global professional landscape, proving culture is an asset, not a barrier."
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    description: "Connecting experienced leaders with emerging talent to foster guidance, wisdom transfer, and support."
  }
];

export function Mission() {
  return (
    <Section id="mission" dark>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl mb-6 text-white">Our Mission</h2>
        <p className="text-lg text-primary-foreground/80 leading-relaxed">
          We exist to empower our community members to reach their full professional potential 
          while remaining deeply connected to their cultural roots.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {objectives.map((obj, index) => (
          <div 
            key={index}
            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-xl bg-accent text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/20">
              <obj.icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-display">{obj.title}</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {obj.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
