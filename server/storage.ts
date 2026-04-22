
import {
  type InsertEvent,
  type InsertTeamMember,
  type InsertInquiry,
  type Event,
  type TeamMember,
  inquiries
} from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  getEvents(): Promise<Event[]>;
  getEvent(id: number): Promise<Event | undefined>;
  getTeamMembers(): Promise<TeamMember[]>;
  createInquiry(inquiry: InsertInquiry): Promise<void>;

  // Seed methods
  createEvent(event: InsertEvent): Promise<Event>;
  createTeamMember(member: InsertTeamMember): Promise<TeamMember>;
}

export class MemoryStorage implements IStorage {
  private events: Event[] = [];
  private teamMembers: TeamMember[] = [];
  private inquiries: InsertInquiry[] = [];
  private nextEventId = 1;
  private nextMemberId = 1;

  async getEvents(): Promise<Event[]> {
    return this.events;
  }

  async getEvent(id: number): Promise<Event | undefined> {
    return this.events.find(e => e.id === id);
  }

  async getTeamMembers(): Promise<TeamMember[]> {
    return this.teamMembers;
  }

  async createInquiry(inquiry: InsertInquiry): Promise<void> {
    this.inquiries.push(inquiry);
  }

  async createEvent(event: InsertEvent): Promise<Event> {
    const newEvent: Event = { ...event, id: this.nextEventId++, imageUrl: event.imageUrl ?? null, date: event.date ?? null, isUpcoming: event.isUpcoming ?? true, registrationUrl: event.registrationUrl ?? null };
    this.events.push(newEvent);
    return newEvent;
  }

  async createTeamMember(member: InsertTeamMember): Promise<TeamMember> {
    const newMember: TeamMember = {
      ...member,
      id: this.nextMemberId++,
      bio: member.bio ?? null,
      imageUrl: member.imageUrl ?? null,
      linkedinUrl: member.linkedinUrl ?? null,
    };
    this.teamMembers.push(newMember);
    return newMember;
  }
}

export class DatabaseStorage extends MemoryStorage {
  async createInquiry(inquiry: InsertInquiry): Promise<void> {
    await db!.insert(inquiries).values(inquiry);
  }
}

export const storage: IStorage = process.env.DATABASE_URL
  ? new DatabaseStorage()
  : new MemoryStorage();
