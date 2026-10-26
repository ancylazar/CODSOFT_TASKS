import Navbar from "@/components/Navbar";
const companies = [
  ["NovaLabs","NL","Bengaluru","Product & Engineering"],
  ["PixelForge","PF","Chennai","Design & Technology"],
  ["CloudSprint","CS","Hyderabad","Cloud & Data"],
  ["GreenGrid","GG","Pune","Climate Technology"],
  ["OrbitPay","OP","Remote","FinTech"],
  ["MindMesh","MM","Bengaluru","AI & Machine Learning"]
];
export default function Companies() {
  return <><Navbar /><main className="companies"><div className="companiesHero"><div className="eyebrow">DISCOVER GREAT TEAMS</div><h1>Companies building<br /><span>what’s next.</span></h1><p>Explore teams that are hiring ambitious people across India and beyond.</p></div><div className="companyGrid">{companies.map(([name,logo,city,tag]) => <div className="companyCard" key={name}><div className="companyLogo big">{logo}</div><h3>{name}</h3><span>{tag}</span><p>📍 {city}</p><a href="/jobs">View open roles →</a></div>)}</div></main></>;
}
