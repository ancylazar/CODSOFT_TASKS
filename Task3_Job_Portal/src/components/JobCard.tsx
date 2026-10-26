 "use client";

import Link from "next/link";
import { useState } from "react";
import type { Job } from "@/lib/data";

export default function JobCard({ job }: { job: Job }) {
  const [saved, setSaved] = useState(false);

  function toggleSave() {
    setSaved(v => !v);
    const key = "hireflow-saved";
    const current = JSON.parse(localStorage.getItem(key) || "[]") as number[];
    const next = current.includes(job.id) ? current.filter(id => id !== job.id) : [...current, job.id];
    localStorage.setItem(key, JSON.stringify(next));
  }

  return (
    <article className="jobCard">
      <div className="jobTop">
        <div className="companyLogo">{job.logo}</div>
        <button className={`save ${saved ? "saved" : ""}`} onClick={toggleSave} aria-label="Save job">{saved ? "♥" : "♡"}</button>
      </div>
      <div className="companyName">{job.company}</div>
      <h3>{job.title}</h3>
      <div className="chips"><span>{job.mode}</span><span>{job.type}</span></div>
      <p>{job.description}</p>
      <div className="skills">{job.skills.map(s => <span key={s}>{s}</span>)}</div>
      <div className="jobBottom">
        <strong>{job.salary}</strong>
        <span>{job.posted}</span>
      </div>
      <Link href={`/jobs/${job.id}`} className="cardLink">View role →</Link>
    </article>
  );
}
