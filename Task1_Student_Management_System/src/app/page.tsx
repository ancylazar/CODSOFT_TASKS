import Link from "next/link";

const cards = [
  ["Students","Manage student profiles, courses and academic details.","/students"],
  ["Teachers","Manage faculty and subjects.","/teachers"],
  ["Attendance","Track student attendance status.","/attendance"],
  ["Results","View examination marks and grades.","/results"]
];

export default function Home() {
  return <main className="shell">
    <header className="topbar">
      <div><h1>EduManage</h1><p>Student Management System</p></div>
      <span className="badge">ADMIN DASHBOARD</span>
    </header>
    <section className="hero">
      <div><p className="eyebrow">CODSOFT • TASK 1</p><h2>Education management, simplified.</h2>
      <p>Manage students, teachers, attendance and examination results from one clean dashboard.</p></div>
    </section>
    <section className="grid">
      {cards.map(([title,desc,href])=><Link className="card" href={href} key={title}><h3>{title}</h3><p>{desc}</p><span>Open →</span></Link>)}
    </section>
  </main>
}