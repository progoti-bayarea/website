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

const EVENT_IMAGE_POSITION: Record<number, string> = {
  1: "50% 50%",
  2: "50% 50%",
  3: "50% 50%",
  4: "50% 50%",
};

function parseSeriesEvent(event: Event) {
  const match = event.title.match(/^Career Navigation Series:\s*(.+)$/);
  if (match) return { sessionTitle: match[1] };
  return null;
}

function SeriesSection({ events }: { events: Event[] }) {
  const sorted = [...events];

  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <div className="bg-secondary/40 px-6 py-5 border-b border-border">
        <h3 className="text-xl font-display font-bold text-foreground">{SERIES_PREFIX}</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Five online sessions designed to accelerate your career — from landing the job to leading with impact.
        </p>
        <p className="text-xs text-muted-foreground/70 mt-1">Remote · Dates to be announced</p>
      </div>

      <div className="divide-y divide-border">
        {sorted.map((event, index) => {
          const parsed = parseSeriesEvent(event);
          const isComingSoon = parsed?.sessionTitle === "Coming Soon";

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.35, delay: index * 0.07, ease: "easeOut" }}
              className={cn(
                "flex flex-wrap items-center gap-3 sm:gap-5 px-4 sm:px-6 py-4 transition-colors",
                isComingSoon ? "bg-secondary/10" : "hover:bg-secondary/20"
              )}
            >
              <motion.div
                initial={{ scale: 0.75 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.07 + 0.1, ease: "easeOut" }}
                className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center",
                  isComingSoon ? "bg-border text-muted-foreground" : "bg-primary/10 text-primary"
                )}
              >
                {isComingSoon ? <Lock className="w-3.5 h-3.5" /> : (index + 1)}
              </motion.div>

              <div className="flex-1 min-w-0">
                <p className={cn("font-semibold truncate", isComingSoon ? "text-muted-foreground" : "text-foreground")}>
                  {isComingSoon ? "Session topic to be announced" : parsed?.sessionTitle}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {isComingSoon ? "Stay tuned — details coming soon" : event.description}
                </p>
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
              {standaloneEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
                  className="group flex flex-col md:flex-row bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="md:w-2/5 relative h-48 md:h-auto bg-muted">
                    {event.imageUrl && (
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        style={{ objectPosition: EVENT_IMAGE_POSITION[event.id] ?? "50% 50%" }}
                        className={cn(
                          "w-full h-full object-cover transition-all duration-500",
                          !event.isUpcoming && "grayscale-[40%] group-hover:grayscale-0"
                        )}
                      />
                    )}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
                      {event.date ? format(new Date(event.date), "MMM d, yyyy") : "TBA"}
                    </div>
                    {!event.isUpcoming && (
                      <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-semibold text-white/80 tracking-wide">
                        Past Event
                      </div>
                    )}
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
                          <span>{event.date ? format(new Date(event.date), "MMMM d, yyyy • h:mm a") : "Date TBA"}</span>
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
                </motion.div>
              ))}
            </div>
          )}

          {seriesEvents.length > 0 && <SeriesSection events={seriesEvents} />}
        </div>
      )}
    </Section>
  );
}
