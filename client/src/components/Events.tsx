import { useState } from "react";
import { Section } from "./ui/section";
import { useEvents } from "@/hooks/use-progoti";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export function Events() {
  const { data: events, isLoading } = useEvents();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const filteredEvents = events?.filter(e => 
    activeTab === 'upcoming' ? e.isUpcoming : !e.isUpcoming
  ) || [];

  return (
    <Section id="events" className="bg-background">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl mb-4">Events</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Join us for networking mixers, cultural celebrations, and professional workshops.
          </p>
        </div>
        
        <div className="flex bg-secondary p-1 rounded-xl self-start md:self-auto">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={cn(
              "px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200",
              activeTab === 'upcoming' 
                ? "bg-white text-primary shadow-sm" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={cn(
              "px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200",
              activeTab === 'past' 
                ? "bg-white text-primary shadow-sm" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Past Events
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skeleton className="h-64 rounded-2xl" />
          <Skeleton className="h-64 rounded-2xl" />
        </div>
      ) : filteredEvents.length === 0 ? (
        <div className="text-center py-20 bg-secondary/20 rounded-2xl border border-dashed border-border">
          <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
          <h3 className="text-xl font-medium text-foreground">No {activeTab} events found</h3>
          <p className="text-muted-foreground mt-2">Check back soon for updates!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div 
              key={event.id}
              className="group flex flex-col md:flex-row bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="md:w-2/5 relative h-48 md:h-auto bg-muted">
                <img 
                  src={event.imageUrl || "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80"} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
                  {format(new Date(event.date), "MMM d")}
                </div>
              </div>
              
              <div className="flex-1 p-6 flex flex-col">
                <div className="mb-auto">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {event.description}
                  </p>
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground/80">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{format(new Date(event.date), "MMMM d, yyyy • h:mm a")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                {event.isUpcoming && (
                  <div className="mt-6 pt-6 border-t border-border flex justify-end">
                    <button className="flex items-center text-primary font-semibold text-sm hover:underline group/btn">
                      Register Now 
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
