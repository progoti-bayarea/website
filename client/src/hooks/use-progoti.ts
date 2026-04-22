import { useMutation } from "@tanstack/react-query";
import { insertInquirySchema, type InsertInquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { EVENTS, TEAM_MEMBERS } from "@/data/static-data";

export function useEvents() {
  return { data: EVENTS, isLoading: false, error: null };
}

export function useTeam() {
  return { data: TEAM_MEMBERS, isLoading: false, error: null };
}

const WORKER_URL = import.meta.env.VITE_WORKER_URL as string | undefined;

export function useSubmitInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const parsed = insertInquirySchema.safeParse(data);
      if (!parsed.success) {
        throw new Error(parsed.error.errors[0].message);
      }

      if (!WORKER_URL) {
        throw new Error("Contact form is not configured yet. Please try again later.");
      }

      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) {
        const error = await res.json().catch(() => ({ message: "Failed to send message" }));
        throw new Error(error.message || "Failed to send message");
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you shortly.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
