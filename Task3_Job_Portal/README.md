# HireFlow — Job Portal

A realistic, colorful and professional full-stack job portal built for the CODSOFT Full Stack Web Development internship — Task 3.

## Features
- Responsive landing page with modern hero and real office photography
- Job search with keyword, work mode and location filters
- Featured job listings with save-job interaction
- Job detail and application workflow
- Candidate dashboard with application activity
- Company discovery page
- Employer "Post a Job" form
- Sign-in UI
- REST-style API routes for jobs and applications
- Prisma schema for PostgreSQL
- Seed data for users, companies, jobs and applications
- Cloud-ready image URLs

## Tech Stack
Next.js, React, TypeScript, Node.js API routes, PostgreSQL, Prisma, CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

### Optional PostgreSQL setup

Create `.env` from `.env.example`, set `DATABASE_URL`, then:

```bash
npx prisma generate
npx prisma db push
npm run db:seed
```

The polished demo UI works independently of the database so it can be demonstrated immediately.
