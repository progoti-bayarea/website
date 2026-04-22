import type { Event, TeamMember } from "@shared/schema";

export const EVENTS: Event[] = [
  {
    id: 1,
    title: "Current Trends in Industry & Beyond",
    description:
      "Panel discussion with C-suite leaders, senior engineers, entrepreneurs, and professionals from parallel domains sharing real-world insights on navigating industry trends.",
    date: new Date("2025-10-25T12:00:00"),
    location: "Eden Gardens Restaurant, San Jose",
    imageUrl: "/assets/Eden_Gardens.jpg",
    isUpcoming: false,
    registrationUrl: null,
  },
  {
    id: 2,
    title: "Hiking",
    description:
      "A community hike through the trails of Rancho Antonio County Park — a great way to unwind, connect with fellow professionals, and enjoy the outdoors together.",
    date: new Date("2026-02-01T09:00:00"),
    location: "Rancho Antonio County Park, Cupertino",
    imageUrl: "/assets/Hiking_Rancho_Antonio.JPG",
    isUpcoming: false,
    registrationUrl: null,
  },
  {
    id: 3,
    title: "Career Navigation Series #1: Recruiting & Resume Workshop",
    description:
      "Learn what hiring managers really look for, sharpen your resume, and get your questions answered in an open Q&A.",
    date: new Date("2026-05-30T18:00:00"),
    location: "Remote",
    imageUrl: null,
    isUpcoming: true,
    registrationUrl: null,
  },
  {
    id: 4,
    title: "Career Navigation Series #2: Building a Network & Being Seen",
    description:
      "Build meaningful connections, raise your visibility, and learn how to get noticed in your field.",
    date: new Date("2026-05-31T18:00:00"),
    location: "Remote",
    imageUrl: null,
    isUpcoming: true,
    registrationUrl: null,
  },
  {
    id: 5,
    title: "Career Navigation Series #3: AI Productivity with OpenClaw",
    description:
      "A live walkthrough of OpenClaw and how to use it to supercharge your everyday productivity.",
    date: new Date("2026-06-06T18:00:00"),
    location: "Remote",
    imageUrl: null,
    isUpcoming: true,
    registrationUrl: null,
  },
  {
    id: 6,
    title: "Career Navigation Series #4: Coming Soon",
    description:
      "Something exciting is on the way. Stay tuned for details on our next session!",
    date: new Date("2026-06-07T18:00:00"),
    location: "Remote",
    imageUrl: null,
    isUpcoming: true,
    registrationUrl: null,
  },
  {
    id: 7,
    title: "Career Navigation Series #5: Coming Soon",
    description:
      "Something exciting is on the way. Stay tuned for details on our final session!",
    date: new Date("2026-06-13T18:00:00"),
    location: "Remote",
    imageUrl: null,
    isUpcoming: true,
    registrationUrl: null,
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Subhamoy Das",
    role: "Core Team",
    bio: "Senior research scientist at Terremoto Biosciences developing covalent small molecule inhibitors for breast and prostate cancers. Ph.D. in Biomedical Engineering from UT Austin, postdoc from Stanford University.",
    imageUrl: "/assets/Subhamoy_Das_1769321243254.jpg",
    linkedinUrl: "https://www.linkedin.com/in/moydas/",
  },
  {
    id: 2,
    name: "Richa Bhattacharya",
    role: "Core Team",
    bio: "Software Engineer at Amazon, building large-scale systems for the world's largest online marketplace. UC Berkeley graduate in Computer Science and Data Science.",
    imageUrl: "/assets/Richa_Bhattacharya_1769321243255.png",
    linkedinUrl: "https://www.linkedin.com/in/richabhattacharya/",
  },
  {
    id: 3,
    name: "Mohini Dutta",
    role: "Core Team",
    bio: "Software Engineer at SAP on the Replication Management Service team. UMD College Park graduate in Computer Science with experience at AWS and Asurion.",
    imageUrl: "/assets/Mohini_Dutta_1769321243256.png",
    linkedinUrl: "https://www.linkedin.com/in/mohini-dutta-75b4a9178/",
  },
  {
    id: 4,
    name: "Sayane Shome",
    role: "Core Team",
    bio: "Computational Researcher at Stanford University School of Medicine with a Ph.D. in Bioinformatics from Iowa State University. Stanford Postdoc Champion 2024.",
    imageUrl: "/assets/sayane_1769321243255.png",
    linkedinUrl: "https://www.sayaneshome1.com/",
  },
  {
    id: 5,
    name: "Bibek Das",
    role: "Advisor",
    bio: "Director of Products at Visa with 25+ years in IT and financial services. Co-founder of three Bay Area non-profits: Pashchimi, Dishari, and Association of Bengalis.",
    imageUrl: "/assets/mugshot-2_1769321243255.JPG",
    linkedinUrl: "https://www.linkedin.com/in/bibekdas",
  },
];
