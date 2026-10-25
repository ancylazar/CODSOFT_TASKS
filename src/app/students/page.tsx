import { prisma } from "@/lib/prisma";
import StudentForm from "./StudentForm";

export default async function Students() {
  const students = await prisma.student.findMany({orderBy:{id:"desc"}});
  return <main className="shell"><a href="/">← Dashboard</a><h1>Students</h1><StudentForm />
    <div className="tableWrap"><table><thead><tr><th>Name</th><th>Email</th><th>Course</th><th>Year</th></tr></thead>
    <tbody>{students.map(s=><tr key={s.id}><td>{s.name}</td><td>{s.email}</td><td>{s.course}</td><td>{s.year}</td></tr>)}</tbody></table></div>
  </main>
}