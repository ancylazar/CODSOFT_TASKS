export type Job = {
  id: number;
  title: string;
  company: string;
  logo: string;
  location: string;
  mode: string;
  type: string;
  salary: string;
  description: string;
  skills: string[];
  featured?: boolean;
  posted: string;
};

export const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    company: "NovaLabs",
    logo: "NL",
    location: "Bengaluru",
    mode: "Hybrid",
    type: "Full-time",
    salary: "₹18–26 LPA",
    description: "Build polished, accessible product experiences used by thousands of customers.",
    skills: ["React", "Next.js", "TypeScript"],
    featured: true,
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "Product Designer",
    company: "PixelForge",
    logo: "PF",
    location: "Chennai",
    mode: "On-site",
    type: "Full-time",
    salary: "₹10–16 LPA",
    description: "Own end-to-end product design and create experiences that feel effortless.",
    skills: ["Figma", "UX", "Design Systems"],
    featured: true,
    posted: "4 days ago"
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "CloudSprint",
    logo: "CS",
    location: "Hyderabad",
    mode: "Remote",
    type: "Full-time",
    salary: "₹16–24 LPA",
    description: "Design reliable APIs and services for cloud-scale workloads.",
    skills: ["Node.js", "PostgreSQL", "AWS"],
    posted: "1 week ago"
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "GreenGrid",
    logo: "GG",
    location: "Pune",
    mode: "Hybrid",
    type: "Full-time",
    salary: "₹8–13 LPA",
    description: "Turn operational data into insights that shape product decisions.",
    skills: ["SQL", "Python", "Power BI"],
    posted: "1 week ago"
  },
  {
    id: 5,
    title: "Mobile App Developer",
    company: "OrbitPay",
    logo: "OP",
    location: "Remote",
    mode: "Remote",
    type: "Contract",
    salary: "₹12–18 LPA",
    description: "Ship elegant mobile experiences for the next generation of digital payments.",
    skills: ["React Native", "Expo", "REST"],
    posted: "2 weeks ago"
  },
  {
    id: 6,
    title: "AI/ML Engineer",
    company: "MindMesh",
    logo: "MM",
    location: "Bengaluru",
    mode: "Hybrid",
    type: "Full-time",
    salary: "₹20–30 LPA",
    description: "Prototype and productionize machine learning features across our platform.",
    skills: ["Python", "PyTorch", "LLMs"],
    featured: true,
    posted: "2 weeks ago"
  }
];
