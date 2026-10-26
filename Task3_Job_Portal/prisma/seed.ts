import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.application.deleteMany();
  await prisma.job.deleteMany();
  await prisma.company.deleteMany();
  await prisma.user.deleteMany();

  const [maya, arjun] = await Promise.all([
    prisma.user.create({ data: { name: "Maya Joseph", email: "maya@hireflow.dev" } }),
    prisma.user.create({ data: { name: "Arjun Menon", email: "arjun@hireflow.dev", role: "EMPLOYER" } })
  ]);

  const companies = await Promise.all([
    prisma.company.create({ data: { name: "NovaLabs", logo: "NL", location: "Bengaluru, India", website: "https://example.com", description: "Product studio building modern developer tools." } }),
    prisma.company.create({ data: { name: "PixelForge", logo: "PF", location: "Chennai, India", website: "https://example.com", description: "Design-led technology company creating delightful digital products." } }),
    prisma.company.create({ data: { name: "CloudSprint", logo: "CS", location: "Hyderabad, India", website: "https://example.com", description: "Cloud engineering and data platform specialists." } }),
    prisma.company.create({ data: { name: "GreenGrid", logo: "GG", location: "Pune, India", website: "https://example.com", description: "Climate technology company helping cities become smarter." } })
  ]);

  const jobs = [
    { title: "Senior Frontend Engineer", location: "Bengaluru", mode: "Hybrid", type: "Full-time", salary: "₹18–26 LPA", description: "Build polished, accessible product experiences with React and Next.js.", skills: "React, Next.js, TypeScript, CSS", featured: true, companyId: companies[0].id },
    { title: "Product Designer", location: "Chennai", mode: "On-site", type: "Full-time", salary: "₹10–16 LPA", description: "Own end-to-end product design for a growing SaaS platform.", skills: "Figma, UX, UI, Design Systems", featured: true, companyId: companies[1].id },
    { title: "Backend Engineer", location: "Hyderabad", mode: "Remote", type: "Full-time", salary: "₹16–24 LPA", description: "Design reliable APIs and services for cloud-scale workloads.", skills: "Node.js, PostgreSQL, AWS", featured: false, companyId: companies[2].id },
    { title: "Data Analyst", location: "Pune", mode: "Hybrid", type: "Full-time", salary: "₹8–13 LPA", description: "Turn operational data into insights that shape product decisions.", skills: "SQL, Python, Power BI", featured: false, companyId: companies[3].id }
  ];

  for (const job of jobs) {
    await prisma.job.create({ data: { ...job, employerId: arjun.id } });
  }

  await prisma.application.create({
    data: { userId: maya.id, jobId: 1, status: "SHORTLISTED" }
  });
}

main().finally(() => prisma.$disconnect());
