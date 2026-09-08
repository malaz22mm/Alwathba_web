# Alwathba Club Management Platform

A full-stack web platform for presenting and managing sports club operations. The project combines an Arabic-facing club experience with account management, match data, player information, social content, and a product catalog.

Built with **Next.js, React, TypeScript, PostgreSQL, Drizzle ORM, and NextAuth.js**.

## Highlights

- Credentials-based authentication with JWT sessions
- Registration, email verification, and password-reset workflows
- Role-aware user, administrator, and player records
- Player profiles, positions, media, and account status management
- Teams, courts, championships, matches, results, and match events
- Posts, comments, and attached media
- Product catalog with classifications, sizes, quantities, and images
- Relational PostgreSQL model containing 22 interconnected entities
- Runtime environment validation and secret-free SMTP configuration

## Technology stack

| Area | Technologies |
| --- | --- |
| Framework | Next.js 14, React 18, App Router |
| Language | TypeScript |
| UI | Tailwind CSS, NextUI, React Hook Form |
| Authentication | NextAuth.js, credentials provider, JWT sessions, bcrypt |
| Database | PostgreSQL, Drizzle ORM, Drizzle Kit |
| Validation | Zod, T3 environment validation |
| Email | Nodemailer |
| Deployment support | Vercel Postgres, Neon serverless driver |

## Domain model

The database is organized around four main areas:

- **Identity:** users, roles, administrators, players, positions, and user media
- **Competition:** teams, courts, championships, matches, match states, and match events
- **Community:** posts, comments, and related media
- **Store:** products, classifications, sizes, product variants, and product media

Foreign-key relationships and Drizzle relations connect these areas into a structured club-management model.

## Getting started

### Prerequisites

- Node.js 20 or later
- npm
- A PostgreSQL database

### Installation

```bash
git clone https://github.com/malaz22mm/Alwathba_web.git
cd Alwathba_web
npm install
```

Copy the environment template and replace its placeholders:

```bash
cp .env.example .env
```

At minimum, configure:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/alwathba"
NEXTAUTH_SECRET="replace-with-a-long-random-secret"
NEXTAUTH_URL="http://localhost:3000"
```

Email delivery additionally requires `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_SECURE`, `EMAIL_USER`, and `EMAIL_PASSWORD`.

Initialize the database and start the development server:

```bash
npm run db:push
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run Next.js linting |
| `npm run db:push` | Push the Drizzle schema to PostgreSQL |
| `npm run db:studio` | Open Drizzle Studio |
| `npm run migration:generate` | Generate database migrations |

## Project status

This repository is a portfolio and development project demonstrating end-to-end product design across frontend, backend, authentication, and relational data modeling.

Before production use, the next priorities are consolidating legacy duplicate source paths, adding automated tests, strengthening route-level authorization, and completing deployment documentation.

## Author

[Malaz Solieman](https://github.com/malaz22mm) · [LinkedIn](https://www.linkedin.com/in/malaz-solieman-382045251)

