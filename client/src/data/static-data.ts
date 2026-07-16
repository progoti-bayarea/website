import type { Event, TeamMember } from "@shared/schema";
import edenGardensImg from "@assets/Eden_Gardens.jpg";
import addaPartyImg from "@assets/ADDA_Aug1_Event.png";
import coffeeChatImg from "@assets/coffee-chat.JPG";
import hikingImg from "@assets/Hiking_Rancho_Antonio.JPG";
import aobSummerfestImg from "@assets/AOB_SummerFest.png";
import subhamoyImg from "@assets/Subhamoy_Das_1769321243254.jpg";
import richaImg from "@assets/Richa_Bhattacharya_1769321243255.png";
import mohiniImg from "@assets/Mohini_Dutta_1769321243256.png";
import sayaneImg from "@assets/sayane_1769321243255.png";
import bibekImg from "@assets/mugshot-2_1769321243255.JPG";

export const EVENTS: Event[] = [
  {
    id: 1,
    title: "Current Trends in Industry & Beyond",
    description:
      "Panel discussion with C-suite leaders, senior engineers, entrepreneurs, and professionals from parallel domains sharing real-world insights on navigating industry trends.",
    date: new Date("2025-10-25T12:00:00"),
    location: "Eden Gardens Restaurant, San Jose",
    imageUrl: edenGardensImg,
    isUpcoming: false,
    registrationUrl: null,
  },
  {
    id: 2,
    title: "Coffee Chat",
    description:
      "An informal community coffee chat — a relaxed afternoon to meet fellow professionals, share stories, and build new connections over a warm cup.",
    date: new Date("2025-11-23T15:00:00"),
    location: "Red Rock Coffee, Downtown Mountain View",
    imageUrl: coffeeChatImg,
    isUpcoming: false,
    registrationUrl: null,
  },
  {
    id: 4,
    title: "Hiking",
    description:
      "A community hike through the trails of Rancho Antonio County Park — a great way to unwind, connect with fellow professionals, and enjoy the outdoors together.",
    date: new Date("2026-02-01T09:00:00"),
    location: "Rancho Antonio County Park, Cupertino",
    imageUrl: hikingImg,
    isUpcoming: false,
    registrationUrl: null,
  },
  {
    id: 5,
    title: "Career Navigation Series: From AI-Anxious to AI-Fluent: A Practical Playbook for Your Career",
    description:
      "Pick up a practical AI framework, see live demos of AI put to real use, and get your questions answered in open Q&A",
    date: new Date("2026-07-12T11:00:00"),
    location: "Remote",
    imageUrl: null,
    isUpcoming: true,
    registrationUrl: null,
    speaker: "Sabyasachi Basu",
  },
  {
    id: 8,
    title: "Career Navigation Series: Building a Network & Being Seen",
    description:
      "Discover how to build meaningful connections, increase your visibility, and stand out in your field",
    date: new Date("2026-07-18T11:00:00"),
    location: "Remote",
    imageUrl: null,
    isUpcoming: true,
    registrationUrl: null,
    speaker: "Bivas Nag",
  },
  {
    id: 6,
    title: "Career Navigation Series: Building Leadership Skills",
    description:
      "Develop the mindset and skills needed to lead with confidence and make a meaningful impact",
    date: new Date("2026-07-26T13:00:00"),
    location: "Remote",
    imageUrl: null,
    isUpcoming: true,
    registrationUrl: null,
    speaker: "Deb Bhattacharjee",
  },
  {
    id: 7,
    title: "ADDA — Connect & Chill",
    description:
      "Join us for a relaxed community hangout with opportunities to connect with fellow members",
    date: new Date("2026-08-01T16:00:00"),
    location: "In-Person — 3165 Porter Drive, Stanford Research Park, Palo Alto, CA",
    imageUrl: addaPartyImg,
    isUpcoming: true,
    registrationUrl: null,
    speaker: null,
  },
  {
    id: 8,
    title: "AOB Summerfest",
    description:
      "Celebrating Bay Area Bangaliyana. Food, Culture, Music, Friends and More!",
    date: new Date("2026-08-16T12:00:00"),
    location: "40000 Paseo Padre Pkwy, Fremont, CA",
    imageUrl: aobSummerfestImg,
    isUpcoming: true,
    registrationUrl: null,
    speaker: null,
  },
  {
    id: 3,
    title: "Career Navigation Series: Recruiting & Resume Workshop",
    description:
      "Learn what hiring managers really look for, sharpen your resume, and get your questions answered in an open Q&A",
    date: new Date("2026-08-22T12:30:00"),
    location: "Remote",
    imageUrl: null,
    isUpcoming: true,
    registrationUrl: null,
    speaker: "Bitan Nandi Biswas",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Subhamoy Das",
    role: "Core Team",
    bio: "Senior research scientist at Terremoto Biosciences developing covalent small molecule inhibitors for breast and prostate cancers. Ph.D. in Biomedical Engineering from UT Austin, postdoc from Stanford University.",
    imageUrl: subhamoyImg,
    linkedinUrl: "https://www.linkedin.com/in/moydas/",
  },
  {
    id: 2,
    name: "Richa Bhattacharya",
    role: "Core Team",
    bio: "Software Engineer at Amazon, building large-scale systems for the world's largest online marketplace. UC Berkeley graduate in Computer Science and Data Science.",
    imageUrl: richaImg,
    linkedinUrl: "https://www.linkedin.com/in/richabhattacharya/",
  },
  {
    id: 3,
    name: "Mohini Dutta",
    role: "Core Team",
    bio: "Software Engineer at SAP on the Replication Management Service team. UMD College Park graduate in Computer Science with experience at AWS and Asurion.",
    imageUrl: mohiniImg,
    linkedinUrl: "https://www.linkedin.com/in/mohini-dutta-75b4a9178/",
  },
  {
    id: 4,
    name: "Sayane Shome",
    role: "Core Team",
    bio: "Computational Researcher at Stanford University School of Medicine with a Ph.D. in Bioinformatics from Iowa State University. Stanford Postdoc Champion 2024.",
    imageUrl: sayaneImg,
    linkedinUrl: "https://www.linkedin.com/in/sayaneshome/",
  },
  {
    id: 5,
    name: "Bibek Das",
    role: "Advisor",
    bio: "Director of Products at Visa with 25+ years in IT and financial services. Co-founder of three Bay Area non-profits: Pashchimi, Dishari, and Association of Bengalis.",
    imageUrl: bibekImg,
    linkedinUrl: "https://www.linkedin.com/in/bibekdas",
  },
];
