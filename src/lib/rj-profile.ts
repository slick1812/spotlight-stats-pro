import heroImage from "@/assets/rj-hero.jpg";

export const profile = {
  fullName: "DANIEL RAY CLARK JR.",
  nickname: "RJ",
  classYear: "Class of 2029",
  heroImage,
  bio: {
    height: "5'9\"",
    weight: "145 lbs",
    positions: "Catcher / Shortstop",
    batsThrows: "R / R",
    location: "Santo Domingo, DR",
    age: "14",
  },
  metrics: [
    {
      label: "60 Yard Dash",
      value: "7.42",
      unit: "sec",
      date: "May 12, 2026",
      verifiedBy: "Verified by Dominican Academy",
    },
    {
      label: "Pop Time",
      value: "1.94",
      unit: "sec",
      date: "Apr 28, 2026",
      verifiedBy: "Verified by Dominican Academy",
    },
    {
      label: "Exit Velocity",
      value: "88",
      unit: "mph",
      date: "Jun 03, 2026",
      verifiedBy: "Verified by Dominican Academy",
    },
  ],
  videos: [
    {
      id: "highlight",
      label: "Highlight Reel",
      description: "2026 Spring Showcase — full-game highlights",
      src: "https://cdn.coverr.co/videos/coverr-baseball-in-the-park-4419/1080p.mp4",
      poster: "",
    },
    {
      id: "catching",
      label: "Catching",
      description: "Blocking, framing, and pop time drills",
      src: "https://cdn.coverr.co/videos/coverr-a-baseball-game-1584/1080p.mp4",
      poster: "",
    },
    {
      id: "hitting",
      label: "Hitting",
      description: "Cage work and live BP — May 2026",
      src: "https://cdn.coverr.co/videos/coverr-a-batter-hitting-a-baseball-8449/1080p.mp4",
      poster: "",
    },
  ],
  milestones: [
    {
      date: "Jun 2026",
      title: "Selected to ASL All-Star Roster",
      body: "Named to the Academy Showcase League 14U All-Star team as starting catcher.",
    },
    {
      date: "May 2026",
      title: "New Personal Best — Exit Velocity 88 mph",
      body: "Recorded a career-high exit velocity during verified showcase testing.",
    },
    {
      date: "Apr 2026",
      title: "Pop Time drops to 1.94",
      body: "Sub-2.0 pop time verified across three consecutive throws to second base.",
    },
    {
      date: "Feb 2026",
      title: "Committed to Dominican Academy Training Program",
      body: "Enrolled full-time in the Dominican Academy elite development program.",
    },
    {
      date: "Sep 2025",
      title: "Moved to Primary Catcher",
      body: "Transitioned from utility infielder to full-time catcher and secondary shortstop.",
    },
  ],
  contacts: {
    parent: {
      role: "Parent",
      name: "Daniel Clark Sr.",
      phone: "+1 (555) 210-4488",
      email: "clark.family@example.com",
    },
    coach: {
      role: "Head Coach",
      name: "Coach Miguel Ramirez",
      phone: "+1 (809) 555-0132",
      email: "coach@dominicanacademy.example",
    },
  },
  pdfUrl: "#",
} as const;

export type Profile = typeof profile;
