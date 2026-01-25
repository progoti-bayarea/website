
import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.events.list.path, async (_req, res) => {
    const events = await storage.getEvents();
    res.json(events);
  });

  app.get(api.events.get.path, async (req, res) => {
    const event = await storage.getEvent(Number(req.params.id));
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  });

  app.get(api.team.list.path, async (_req, res) => {
    const team = await storage.getTeamMembers();
    res.json(team);
  });

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      await storage.createInquiry(input);
      res.status(201).json({ success: true });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed data function
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const events = await storage.getEvents();
  if (events.length === 0) {
    // Seed Events
    await storage.createEvent({
      title: "Progoti Launch Mixer",
      description: "Join us for the official launch of Progoti! Meet fellow professionals and learn about our mission.",
      date: new Date("2024-03-15T18:00:00"),
      location: "Bay Area, CA",
      isUpcoming: false
    });
    
    await storage.createEvent({
      title: "Career Navigation in Tech",
      description: "Panel discussion with senior leaders in the tech industry sharing insights on career growth.",
      date: new Date("2024-06-20T17:30:00"),
      location: "San Francisco, CA",
      isUpcoming: true
    });

    await storage.createEvent({
      title: "Summer Networking Picnic",
      description: "A casual gathering to connect with the community and enjoy the summer weather.",
      date: new Date("2024-07-15T11:00:00"),
      location: "Golden Gate Park, SF",
      isUpcoming: true
    });
  }

  const team = await storage.getTeamMembers();
  if (team.length === 0) {
    // Seed Team Members (Generic placeholders based on roles mentioned in concept note)
    await storage.createTeamMember({
      name: "Core Team Member",
      role: "Events Lead",
      bio: "Experienced in organizing large-scale community events and professional gatherings.",
    });
    
    await storage.createTeamMember({
      name: "Core Team Member",
      role: "Outreach Lead",
      bio: "Passionate about connecting with diverse groups and building lasting partnerships.",
    });

    await storage.createTeamMember({
      name: "Core Team Member",
      role: "Partnerships Lead",
      bio: "Focused on building strategic alliances with universities and professional organizations.",
    });

    await storage.createTeamMember({
      name: "Core Team Member",
      role: "Communications Lead",
      bio: "Expert in digital communication and brand storytelling.",
    });
  }
}
