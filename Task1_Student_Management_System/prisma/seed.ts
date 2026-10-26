import { PrismaClient, AttendanceStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.result.deleteMany();
  await prisma.attendance.deleteMany();
  await prisma.teacher.deleteMany();
  await prisma.student.deleteMany();

  const students = await Promise.all([
    prisma.student.create({data:{name:"Ancy Lazar",email:"ancy@example.com",phone:"9876543210",course:"M.Tech Software Engineering",year:3}}),
    prisma.student.create({data:{name:"Nethra S",email:"nethra@example.com",phone:"9876501234",course:"Computer Science",year:3}}),
    prisma.student.create({data:{name:"Joel Iven H",email:"joel@example.com",phone:"9876512345",course:"Nursing",year:2}})
  ]);

  await prisma.teacher.createMany({data:[
    {name:"Dr. Priya",email:"priya@college.edu",subject:"Software Engineering"},
    {name:"Dr. Kumar",email:"kumar@college.edu",subject:"Database Systems"},
    {name:"Dr. Visalakshi",email:"visalakshi@college.edu",subject:"French"}
  ]});

  for (const s of students) {
    await prisma.attendance.create({data:{studentId:s.id,status:AttendanceStatus.PRESENT}});
    await prisma.result.createMany({data:[
      {studentId:s.id,subject:"Software Engineering",marks:88,grade:"A"},
      {studentId:s.id,subject:"Database Systems",marks:82,grade:"A"}
    ]});
  }
}

main().finally(() => prisma.$disconnect());