
import { db } from "./db";
import {
  events,
  teamMembers,
  inquiries,
  type InsertEvent,
  type InsertTeamMember,
  type InsertInquiry,
  type Event,
  type TeamMember
} from "@shared/schema";

export interface IStorage {
  getEvents(): Promise<Event[]>;
  getEvent(id: number): Promise<Event | undefined>;
  getTeamMembers(): Promise<TeamMember[]>;
  createInquiry(inquiry: InsertInquiry): Promise<void>;
  
  // Seed methods
  createEvent(event: InsertEvent): Promise<Event>;
  createTeamMember(member: InsertTeamMember): Promise<TeamMember>;
}

export class DatabaseStorage implements IStorage {
  async getEvents(): Promise<Event[]> {
    return await db.select().from(events);
  }

  async getEvent(id: number): Promise<Event | undefined> {
    const result = await db.select().from(events).where(require("drizzle-orm").eq(events.id, id));
    return result[0];
  }

  async getTeamMembers(): Promise<TeamMember[]> {
    return await db.select().from(teamMembers);
  }

  async createInquiry(inquiry: InsertInquiry): Promise<void> {
    await db.insert(inquiries).values(inquiry);
  }

  async createEvent(event: InsertEvent): Promise<Event> {
    const [newEvent] = await db.insert(events).values(event).returning();
    return newEvent;
  }

  async createTeamMember(member: InsertTeamMember): Promise<TeamMember> {
    const [newMember] = await db.insert(teamMembers).values(member).returning();
    return newMember;
  }
}

export const storage = new DatabaseStorage();
