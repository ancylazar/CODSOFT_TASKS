# EduManage — CodSoft Task 1

Student Management System built with Next.js, Node.js/Next API routes, PostgreSQL and Prisma.

## Setup

1. Install Node.js LTS and PostgreSQL.
2. Create a PostgreSQL database named `edumanage`.
3. Copy `.env.example` to `.env`.
4. Set your PostgreSQL password in `DATABASE_URL`.
5. Run:

```bash
npm install
npx prisma generate
npx prisma db push
npm run db:seed
npm run dev
```

Open http://localhost:3000

## Features
- Student dashboard
- Student creation
- Teacher management
- Attendance tracking
- Examination results
- PostgreSQL + Prisma database
