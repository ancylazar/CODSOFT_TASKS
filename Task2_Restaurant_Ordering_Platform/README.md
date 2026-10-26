# DineDesk — Restaurant Ordering Platform

CodSoft Full-Stack Web Development — Task 2.

## Features
- Responsive restaurant landing page
- Digital menu with category filters
- Shopping cart with quantity controls
- Checkout and payment-status flow
- Restaurant table reservations
- Real-time order tracking UI
- Kitchen dashboard with order status workflow
- PostgreSQL database with Prisma ORM
- Next.js App Router + API routes
- Tailwind CSS-compatible styling

## Tech Stack
- Next.js 16
- React 19
- TypeScript
- Prisma
- PostgreSQL
- Tailwind CSS
- Lucide React

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure PostgreSQL
Create a PostgreSQL database named `dinedesk`.

Copy `.env.example` to `.env` and update:
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/dinedesk?schema=public"
```

### 3. Create database tables
```bash
npx prisma generate
npx prisma db push
npm run db:seed
```

### 4. Start the application
```bash
npm run dev
```

Open http://localhost:3000

## Main Pages
- `/` — Landing page
- `/menu` — Digital menu
- `/cart` — Cart
- `/checkout` — Checkout
- `/reservation` — Table reservation
- `/track?order=1` — Order tracking
- `/kitchen` — Kitchen dashboard

## GitHub
For CodSoft submission, keep Task 2 inside the same `CODSOFT_TASKS` repository used for Task 1.


## Visual Assets
This version uses real food and restaurant photography from Unsplash. Photo sources are listed below.
- Pizza: https://unsplash.com/photos/a-delicious-pizza-loaded-with-toppings-Cqg9B-JRteI
- Biryani: https://unsplash.com/photos/delicious-rice-dish-served-in-a-clay-bowl-tPI0nbTSMJY
- Pasta: https://unsplash.com/photos/a-plate-of-pasta-with-sauce-and-toppings-hSU3YyEZ62c
- Biryani India: https://unsplash.com/photos/a-white-bowl-filled-with-rice-and-meat-ysmeQt1dzcw
- Burger: https://unsplash.com/photos/burger-with-lettuce-and-tomato-tuuh4DrgMpU
- Dessert: https://unsplash.com/photos/a-dessert-on-a-plate-D4lJ3g1xsTM
- Restaurant interior: https://unsplash.com/photos/colorful-restaurant-interior-with-pizza-oven-visible-TRyT7xZSu8c
