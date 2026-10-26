"use client";
\import Link from "next/link";
import Navbar from "@/components/Navbar";
import { jobs } from "@/lib/data";

export default async function JobDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = jobs.find(j => j.id === Number(id)) || jobs[0];
  return <><Navbar /><main className="detailPage"><Link href="/jobs" className="back">← Back to jobs</Link><div className="detailLayout"><article className="detailMain"><div className="detailCompany"><div className="companyLogo big">{job.logo}</div><div><div className="companyName">{job.company}</div><h1>{job.title}</h1></div></div><div className="chips"><span>{job.mode}</span><span>{job.type}</span><span>{job.location}</span></div><section><h2>About the role</h2><p>{job.description} You’ll work closely with product, design and engineering partners to ship high-quality experiences and improve the platform at scale.</p><h2>What you'll bring</h2><ul>{job.skills.map(s => <li key={s}>Strong hands-on experience with {s} and a product mindset.</li>)}<li>Clear communication and a collaborative working style.</li></ul><h2>Why join {job.company}?</h2><p>Join a team that values ownership, thoughtful execution and continuous learning. We offer meaningful projects, flexible work practices and room to grow.</p></section></article><aside className="applyCard"><div className="salary">{job.salary}<small>Estimated annual compensation</small></div><button onClick={() => alert("Application started! In a production build this would open the candidate application workflow.")}>Apply for this role</button><button className="outline">♡ Save job</button><hr /><b>Role details</b><div className="detailLine">📍 {job.location}</div><div className="detailLine">◷ {job.type}</div><div className="detailLine">◉ {job.mode}</div><div className="detailLine">◌ Posted {job.posted}</div></aside></div></main></>;
}
