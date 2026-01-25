import { Section } from "./ui/section";
import { useTeam } from "@/hooks/use-progoti";
import { Linkedin } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function Team() {
  const { data: team, isLoading } = useTeam();

  if (isLoading) {
    return (
      <Section id="team" className="bg-secondary/30">
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-96 rounded-2xl" />
          ))}
        </div>
      </Section>
    );
  }

  return (
    <Section id="team" className="bg-secondary/30">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl mb-6">Meet Our Team</h2>
      </div>

      {(!team || team.length === 0) ? (
        <div className="text-center py-12 text-muted-foreground">
          <p>Team members coming soon.</p>
        </div>
      ) : (
        <div className="space-y-16">
          {/* Core Team */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary/80">Core Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.filter(m => m.role !== 'Advisor' && m.name !== 'Core Team Member').sort((a, b) => {
                const order = ['Subhamoy Das', 'Richa Bhattacharya', 'Mohini Dutta', 'Sayane Shome'];
                return order.indexOf(a.name) - order.indexOf(b.name);
              }).map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          {/* Advisors */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary/80">Advisors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.filter(m => m.role === 'Advisor').map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

function TeamCard({ member }: { member: any }) {
  return (
    <div 
      className="group bg-card rounded-2xl overflow-hidden shadow-lg shadow-black/5 border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted relative">
        {member.imageUrl ? (
          <img 
            src={member.imageUrl} 
            alt={member.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-display text-4xl">
            {member.name.charAt(0)}
          </div>
        )}
        
        {member.linkedinUrl && (
          <div className="absolute top-4 right-4 translate-y-[-150%] group-hover:translate-y-0 transition-transform duration-300">
            <a 
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer" 
              className="p-2 bg-white rounded-full text-[#0077b5] shadow-md hover:bg-[#0077b5] hover:text-white transition-colors block"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        )}
      </div>
      
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
      </div>
    </div>
  );
}
