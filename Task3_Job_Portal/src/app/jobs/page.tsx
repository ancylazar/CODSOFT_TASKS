 "use client";

import { useMemo, useState } from "react";
import { jobs } from "@/lib/data";
import Navbar from "@/components/Navbar";
import JobCard from "@/components/JobCard";

export default function JobsPage() {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("All");
  const [location, setLocation] = useState("All");
  const filtered = useMemo(() => jobs.filter(j => {
    const text = `${j.title} ${j.company} ${j.skills.join(" ")}`.toLowerCase();
    return (!query || text.includes(query.toLowerCase())) && (mode === "All" || j.mode === mode) && (location === "All" || j.location === location);
  }), [query, mode, location]);

  return <><Navbar /><main className="jobsPage"><div className="jobsHero"><div><div className="eyebrow">EXPLORE OPPORTUNITIES</div><h1>Find your next<br /><span>great role.</span></h1></div><p>{filtered.length} roles matched your search</p></div>
    <div className="filters"><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search title, company or skill..." /><select value={mode} onChange={e => setMode(e.target.value)}><option>All</option><option>Remote</option><option>Hybrid</option><option>On-site</option></select><select value={location} onChange={e => setLocation(e.target.value)}><option>All</option><option>Bengaluru</option><option>Chennai</option><option>Hyderabad</option><option>Pune</option></select></div>
    <div className="results"><aside><b>Job type</b><label><input type="checkbox" defaultChecked /> Full-time</label><label><input type="checkbox" /> Contract</label><b>Experience</b><label><input type="checkbox" /> Entry level</label><label><input type="checkbox" /> Mid level</label><label><input type="checkbox" /> Senior</label></aside><div className="resultGrid">{filtered.map(job => <JobCard key={job.id} job={job} />)}</div></div></main></>;
}
