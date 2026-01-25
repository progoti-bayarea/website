import { Section } from "./ui/section";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/routes";
import { useSubmitInquiry } from "@/hooks/use-progoti";
import { Slack, Send, CheckCircle2 } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Connect() {
  const submitInquiry = useSubmitInquiry();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertInquiry) => {
    submitInquiry.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <Section id="connect" className="bg-primary/5">
      <div className="max-w-5xl mx-auto">
        <div className="bg-card rounded-3xl shadow-2xl shadow-primary/10 overflow-hidden border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Side - Community & Slack */}
            <div className="p-8 md:p-12 bg-primary text-primary-foreground relative overflow-hidden">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
                    Join the Conversation
                  </h2>
                  <p className="text-white/80 text-lg leading-relaxed mb-8">
                    Our community thrives on connection. Join our Slack channel to meet fellow members, 
                    share opportunities, and stay updated on latest news.
                  </p>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="https://join.slack.com/t/progotiprofes-bm63195/shared_invite/zt-3nz46fdk6-YoIh79mzQ2Si370kS4G7eA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-full bg-white text-primary font-bold py-4 px-6 rounded-xl hover:bg-accent hover:text-white transition-all duration-300 shadow-lg"
                  >
                    <Slack className="w-5 h-5 mr-3" />
                    Join Slack Community
                    <ArrowRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </a>
                  <p className="text-center text-xs text-white/50 mt-4">
                    Open to all professionals interested in the community.
                  </p>
                </div>
              </div>
              
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            </div>

            {/* Right Side - Contact Form */}
            <div className="p-8 md:p-12 bg-white">
              <h3 className="text-2xl font-bold mb-2 text-foreground">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Have questions or want to partner with us? Send us a message.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} className="bg-secondary/20 border-border/50 focus:bg-white transition-colors" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="you@company.com" {...field} className="bg-secondary/20 border-border/50 focus:bg-white transition-colors" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            className="min-h-[120px] bg-secondary/20 border-border/50 focus:bg-white transition-colors resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    disabled={submitInquiry.isPending}
                    className="w-full py-3 px-6 rounded-xl font-semibold bg-foreground text-background shadow-lg hover:bg-primary hover:text-white hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {submitInquiry.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Arrow */}
      <div className="flex justify-center mt-12">
        <div className="w-px h-16 bg-gradient-to-b from-border to-transparent" />
      </div>
    </Section>
  );
}

import { ArrowRight } from "lucide-react";
