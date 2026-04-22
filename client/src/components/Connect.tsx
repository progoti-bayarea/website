import { Section } from "./ui/section";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/routes";
import { useSubmitInquiry } from "@/hooks/use-progoti";
import { Slack, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";

const formFields = ["name", "email", "message"] as const;

export function Connect() {
  const submitInquiry = useSubmitInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: { name: "", email: "", message: "" }
  });

  const onSubmit = (data: InsertInquiry) => {
    submitInquiry.mutate(data, {
      onSuccess: () => { form.reset(); }
    });
  };

  return (
    <Section id="connect" className="bg-primary/5">
      <div className="max-w-6xl mx-auto overflow-hidden">
        <div className="bg-card rounded-3xl shadow-2xl shadow-primary/10 overflow-hidden border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left Side - Community & Slack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="p-6 sm:p-8 md:p-12 bg-primary text-primary-foreground relative overflow-hidden"
            >
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
                  <motion.a
                    href="https://join.slack.com/t/progotiprofes-bm63195/shared_invite/zt-3te3zif5t-QmPeUK1dQU2olx0hDfZQVQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center justify-center w-full bg-accent text-white font-bold py-6 px-6 text-lg rounded-xl hover:bg-accent/90 transition-all duration-300 shadow-lg"
                  >
                    <Slack className="w-5 h-5 mr-3" />
                    Join Slack Community
                    <ArrowRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </motion.a>
                  <p className="text-center text-xs text-white/50 mt-4">
                    Open to all professionals interested in the community.
                  </p>
                </div>
              </div>

              {/* Floating decorative circles */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
              />
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="p-6 sm:p-8 md:p-12 bg-white"
            >
              <h3 className="text-2xl font-bold mb-2 text-foreground">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Have questions or want to partner with us? Send us a message.
              </p>

              <AnimatePresence mode="wait">
                {submitInquiry.isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center py-16 gap-4 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <CheckCircle2 className="w-16 h-16 text-primary" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-foreground">Message Sent!</h4>
                    <p className="text-muted-foreground">We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <motion.div key="form">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        {formFields.map((name, index) => (
                          <motion.div
                            key={name}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.2 + index * 0.08 }}
                          >
                            <FormField
                              control={form.control}
                              name={name}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="capitalize">{name}</FormLabel>
                                  <FormControl>
                                    {name === "message" ? (
                                      <Textarea
                                        placeholder="How can we help you?"
                                        className="min-h-[120px] bg-secondary/20 border-border/50 focus:bg-white transition-colors resize-none"
                                        {...field}
                                      />
                                    ) : (
                                      <Input
                                        placeholder={name === "email" ? "you@company.com" : "Your full name"}
                                        {...field}
                                        className="bg-secondary/20 border-border/50 focus:bg-white transition-colors"
                                      />
                                    )}
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </motion.div>
                        ))}

                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.44 }}
                        >
                          <motion.button
                            type="submit"
                            disabled={submitInquiry.isPending}
                            whileHover={{ scale: submitInquiry.isPending ? 1 : 1.02 }}
                            whileTap={{ scale: submitInquiry.isPending ? 1 : 0.98 }}
                            className="w-full py-3 px-6 rounded-xl font-semibold bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                          >
                            {submitInquiry.isPending ? (
                              <motion.span
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                              >
                                Sending...
                              </motion.span>
                            ) : (
                              <>
                                Send Message <Send className="w-4 h-4 ml-2" />
                              </>
                            )}
                          </motion.button>
                        </motion.div>
                      </form>
                    </Form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
