"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import JobCard from "@/components/JobCard";
import { jobs } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <div className="heroGlow one" /><div className="heroGlow two" />
          <div className="heroCopy">
            <div className="eyebrow">THE SMARTER WAY TO CAREER-GROW</div>
            <h1>Work that feels<br /><span>worth it.</span></h1>
            <p>Discover meaningful opportunities from ambitious teams. Search less, connect better, and make your next move with confidence.</p>
            <form className="searchBar" action="/jobs">
              <div className="searchField"><span>⌕</span><input name="q" placeholder="Job title, skill or keyword" /></div>
              <div className="searchField location"><span>⌖</span><input name="location" placeholder="City or remote" /></div>
              <button>Search jobs</button>
            </form>
            <div className="popular">Popular: <Link href="/jobs?q=Frontend">Frontend</Link><Link href="/jobs?q=Product">Product Design</Link><Link href="/jobs?q=Data">Data</Link><Link href="/jobs?q=AI">AI / ML</Link></div>
          </div>
          <div className="heroVisual">
            <div className="photoFrame"><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85" alt="Team collaborating in a modern office" /></div>
            <div className="floatingCard success"><span>↗</span><div><b>4,280+</b><small>new roles this month</small></div></div>
            <div className="floatingCard match"><div className="avatar">AS</div><div><b>98% match</b><small>Frontend Engineer</small></div></div>
          </div>
        </section>

        <section className="stats">
          <div><b>12K+</b><span>active jobs</span></div><div><b>4.8K</b><span>companies hiring</span></div><div><b>92%</b><span>candidate satisfaction</span></div><div><b>48 hrs</b><span>average first response</span></div>
        </section>

        <section className="section">
          <div className="sectionHead"><div><div className="eyebrow">HANDPICKED FOR YOU</div><h2>Featured opportunities</h2></div><Link href="/jobs" className="viewAll">View all jobs →</Link></div>
          <div className="jobGrid">{jobs.filter(j => j.featured).map(job => <JobCard key={job.id} job={job} />)}</div>
        </section>

        <section className="careerBand">
          <div><div className="eyebrow">BUILT FOR BOTH SIDES</div><h2>One place to build<br />your next chapter.</h2><p>Whether you're hiring your next great teammate or searching for the role that changes everything, HireFlow keeps the journey simple.</p></div>
          <div className="bandCards"><div><span>01</span><h3>For candidates</h3><p>Track applications, save roles and get discovered by growing teams.</p><Link href="/dashboard">Explore dashboard →</Link></div><div><span>02</span><h3>For employers</h3><p>Reach qualified candidates with a beautiful, focused hiring workspace.</p><Link href="/post-job">Start hiring →</Link></div></div>
        </section>

        <section className="section">
          <div className="sectionHead"><div><div className="eyebrow">WHY HIRE FLOW</div><h2>A better job search, by design.</h2></div></div>
          <div className="featureGrid"><div><span>✦</span><h3>Quality-first listings</h3><p>Clear salary ranges, work modes and skill tags help you make faster decisions.</p></div><div><span>◎</span><h3>Smart matching</h3><p>Surface opportunities based on your skills, goals and preferred working style.</p></div><div><span>↗</span><h3>Simple hiring</h3><p>Keep conversations, candidates and applications organized in one workspace.</p></div></div>
        </section>
      </main>
      <footer><div className="brand"><span className="brandMark">H</span>HireFlow</div><span>© 2026 HireFlow. Built for ambitious people.</span></footer>
    </>
  );
}
