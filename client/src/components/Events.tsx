import { useState } from "react";
import { Section } from "./ui/section";
import { useEvents } from "@/hooks/use-progoti";
import { Calendar, MapPin, ArrowRight, Lock } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import type { Event } from "@shared/schema";
import { motion } from "framer-motion";

const SERIES_PREFIX = "Career Navigation Series";

function parseSeriesEvent(event: Event) {
  const match = event.title.match(/^Career Navigation Series #(\d+):\s*(.+)$/);
  if (match) return { number: parseInt(match[1]), sessionTitle: match[2] };
  if (event.title === `${SERIES_PREFIX} #4: Coming Soon`) return { number: 4, sessionTitle: "Coming Soon" };
  if (event.title === `${SERIES_PREFIX} #5: Coming Soon`) return { number: 5, sessionTitle: "Coming Soon" };
  return null;
}

function SeriesSection({ events }: { events: Event[] }) {
  const sorted = [...events].sort((a, b) => {
    const na = parseSeriesEvent(a)?.number ?? 99;
    const nb = parseSeriesEvent(b)?.number ?? 99;
    return na - nb;
  });

  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <div className="bg-secondary/40 px-6 py-5 border-b border-border">
        <h3 className="text-xl font-display font-bold text-foreground">{SERIES_PREFIX}</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Five online sessions designed to accelerate your career — from landing the job to leading with impact.
        </p>
      </div>

      <div className="divide-y divide-border">
        {sorted.map((event, index) => {
          const parsed = parseSeriesEvent(event);
          const isComingSoon = parsed?.sessionTitle === "Coming Soon";

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: index * 0.07, ease: "easeOut" }}
              className={cn(
                "flex flex-wrap items-center gap-3 sm:gap-5 px-4 sm:px-6 py-4 transition-colors",
                isComingSoon ? "bg-secondary/10" : "hover:bg-secondary/20"
              )}
            >
              <motion.div
                initial={{ scale: 0.6 }}
                whileInView={{ scale: [0.6, 1.15, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 + 0.1 }}
                className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center",
                  isComingSoon ? "bg-border text-muted-foreground" : "bg-primary/10 text-primary"
                )}
              >
                {isComingSoon ? <Lock className="w-3.5 h-3.5" /> : (parsed?.number ?? "?")}
              </motion.div>

              <div className="flex-1 min-w-0">
                <p className={cn("font-semibold truncate", isComingSoon ? "text-muted-foreground" : "text-foreground")}>
                  {isComingSoon ? "Session topic to be announced" : parsed?.sessionTitle}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {isComingSoon ? "Stay tuned — details coming soon" : event.description}
                </p>
              </div>

              <div className="flex flex-col items-end gap-1 flex-shrink-0 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-accent" />
                  <span className="hidden xs:inline">{event.date ? format(new Date(event.date), "MMM d, yyyy") : "Date TBD"}</span>
                  <span className="xs:hidden">{event.date ? format(new Date(event.date), "MMM d") : "TBD"}</span>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-accent" />
                  {event.location}
                </span>
              </div>

              {!isComingSoon && event.registrationUrl && (
                <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary font-semibold text-xs hover:underline flex-shrink-0 group/btn ml-1 sm:ml-2">
                  <span className="hidden sm:inline">Register</span>
                  <ArrowRight className="w-3 h-3 sm:ml-1 transition-transform group-hover/btn:translate-x-1" />
                </a>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function Events() {
  const { data: events, isLoading } = useEvents();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const filteredEvents = events?.filter(e =>
    activeTab === 'upcoming' ? e.isUpcoming : !e.isUpcoming
  ) || [];

  const seriesEvents = filteredEvents.filter(e => e.title.startsWith(SERIES_PREFIX));
  const standaloneEvents = filteredEvents.filter(e => !e.title.startsWith(SERIES_PREFIX));

  return (
    <Section id="events" className="bg-background min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl mb-4">Events</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Join us for networking mixers, cultural celebrations, and professional workshops.
          </p>
        </div>

        <div className="flex bg-secondary p-1 rounded-xl self-start md:self-auto w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={cn(
              "flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200",
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
              "flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200",
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
        <div className="flex flex-col gap-8">
          {standaloneEvents.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {standaloneEvents.map((event) => (
                <div
                  key={event.id}
                  className="group flex flex-col md:flex-row bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="md:w-2/5 relative h-48 md:h-auto bg-muted">
                    {event.imageUrl && (
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
                      {event.date ? format(new Date(event.date), "MMM d") : "TBD"}
                    </div>
                  </div>

                  <div className="flex-1 p-6 flex flex-col">
                    <div className="mb-auto">
                      <h3 className="text-2xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {event.description}
                      </p>

                      <div className="flex flex-col gap-2 text-sm text-muted-foreground/80">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-accent" />
                          <span>{event.date ? format(new Date(event.date), "MMMM d, yyyy • h:mm a") : "Date TBD"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-accent" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>

                    {event.isUpcoming && event.registrationUrl && (
                      <div className="mt-6 pt-6 border-t border-border flex justify-end">
                        <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary font-semibold text-sm hover:underline group/btn">
                          Register Now
                          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {seriesEvents.length > 0 && <SeriesSection events={seriesEvents} />}
        </div>
      )}
    </Section>
  );
}
