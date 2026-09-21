**PROTIK DEV**

pratikdevofficial1@gmail.com  •  \+880-1537220785

[GitHub](https://github.com/PratikDev)  •  [LinkedIn](https://linkedin.com/in/pratik-and-dev)  •  [Portfolio](https://iam-pratik.vercel.app)

**ONE LINER**

Software Engineer with 3+ years of corporate and 2+ years of freelance experience

**SKILLS**

**Languages:** TypeScript, JavaScript, SQL, Golang

**Tech Stack:** TypeScript, JavaScript, Golang, React.js, Next.js, Node.js, Express.js

**State Management:** Context API, Zustand, React Query

**Databases:** PostgreSQL, MongoDB, MySQL, SQLite, Redis

**DevOps/Infra:** Docker, Github Actions, Vercel, Firebase, Appwrite, Convex, AWS (basic)

**Other:** Git, Github Actions, Jest, Vitest, React Testing Library

**Soft Skills:** Communication, Ownership, Leadership, Collaboration, Analytical Thinking, Friendly & Approachable

**PROFESSIONAL EXPERIENCE**

[**Devspace**](https://www.devspace.so/)	Mar 2026 – Aug 2026  
***Software Engineer***

* Built a dynamic tool registry so agent tools are stored in the database and discovered at runtime instead of hardcoded.

* Contributed to CI/CD pipeline configuration and deployment automation.

* **Tech:** React, TypeScript, Convex, Vercel AI SDK, Github Actions, Codex

[**Osilion**](https://osilion.no/)	Jul 2025 – Feb 2026  
***Full-Stack Engineer***

* Served as one of the primary engineers on an internal productivity tool for a client, contributing to improvement in employee productivity.

* Worked on an intelligent recruitment platform, contributing to technical architecture & database designs, and component design patterns.

* **Tech:** Next.js, TypeScript, Tailwind, ShadcnUI, Zustand, Appfarm (low-code tool), Azure

[**Hone**](https://hone.gg/)	Aug 2025 – Sep 2025  
***Frontend Engineer***

* Implemented Smart Scaling system for a Desktop app to cover smaller screens automatically.

* Owned the review and download pages end to end; found and fixed a responsive layout issue on smaller screens using a CSS grid pattern, validated through manual cross-device testing.

* **Tech:** React, TypeScript, Tailwind, ShadcnUI

[**Hello World Communications**](https://software.helloworldbd.com/)	Sep 2024 – Jul 2025  
***Full-Stack Engineer***

* Led the whole development flow end to end, conducted code reviews, and made key architectural decisions across multiple concurrent client projects

* Reduced client closing time by roughly 50% through better scoping and delivery alignment between client requirements and the development team

* Mentored a junior developer on multiple client projects

* **Tech:** Next.js, TypeScript, Golang, ShadcnUI, Tanstack Query, Zustand, Drizzle ORM, Appwrite, Firebase, Docker

**Bilsida**	Oct 2023 – Aug 2024  
***Full-Stack Engineer***

* Built a Swedish car marketplace from scratch across the full stack, which went on to attract two of Sweden's largest car dealers.

* Mentored a junior developer on developing a chat system

* **Tech:** Next.js, TypeScript, Tailwind, ShadcnUI, Appwrite, Docker, Context API

[**Fiverr**](https://www.fiverr.com/pratik_dev)	Jul 2021 – Oct 2023  
***Freelance Full-Stack Developer***

* Delivered full-stack web applications and APIs for 20+ clients, covering frontend, backend, and deployment.

**FULL-STACK PROJECTS**

**Narrative Guard**  [**Live**](https://narrative-guard.vercel.app/) | [**Source**](https://github.com/PratikDev/narrative-guard)

* Workspace-based brand governance platform with Role based ownership enforced and per-brand RAG namespaces for workspace isolation.

* Built the audit flow end to end: score, verdict, findings, and an AI rewrite surfaced through a responsive Next.js UI, with invite tokens stored as hashes and scheduled Convex actions handling async audit processing.

* **Tech:** Next.js, TypeScript, Convex, Convex Auth, Google Gemini, RAG, shadcn/ui, Vitest, React Testing Library

**Roadmap App**  [**Live**](https://bitcode-roadmap-app.vercel.app/) | [**Source**](https://github.com/PratikDev/roadmap-app)

* Full-stack app with SSR, authentication, a REST API, and upvoting and commenting features.

* Covered with tests using Jest and React Testing Library.

* **Tech:** Next.js, TypeScript, Drizzle ORM, PostgreSQL, Vercel, Jest, React Testing Library

**BACKEND & SYSTEM PROJECTS**

**Spud [Live](https://spud-bot.onrender.com/) |** [**Source**](https://github.com/PratikDev/spud)

* Built and deployed to production a Discord bot for small-team task coordination with **LLM features with Gemini**. Duplicate-task detection that blocks redundant work at claim time, and a **scope-drift detector** that diffs a git branch against its natural-language task description and pings the owner in-channel when the work strays outside what was claimed.

* Engineered a **GitHub App integration** end to end, short-lived installation tokens, and an app-level **Webhook Pipeline**, per-project **Rate Limiting**, and automatic task closure on PR merge.

* Added a **Role-based Permission Model** (team lead vs. server admin) enforced in application code.

* Set up **Production Observability** \- structured JSON logging shipped to **Grafana Loki**, plus **Synthetic Monitoring** with uptime alerting; containerized with Docker on a hosted Turso (libSQL) database.

* **Tech:** TypeScript, Bun, discord.js, GitHub Apps API, Github Actions, Gemini, Vercel AI SDK, SQLite/Turso, Grafana (Loki \+ Synthetic Monitoring), Docker

**Result Lookup**  [**Source**](https://github.com/PratikDev/result-lookup)

* Designed and built a high-throughput exam result publishing system **serving 2M results**.

* Reached **\~32k RPS** peak with **p99 under 105ms** backed by a PostgreSQL fallback with connection limiting.

* **Tech:** Go, PostgreSQL, Redis, pgx/v5, Docker, golang-migrate, slog, miniredis

**URL Shortener API**  [**Live**](https://url-shortener-api-xiyp.onrender.com) | [**Source**](https://github.com/PratikDev/url-shortener-api)

* Built a per-IP token bucket rate limiter using a mutex-protected generic SafeMap, with retry-on-conflict short code generation instead of pre-checking.

* Deployed with a non-root Docker user and a multi-stage build, with integration tests against real PostgreSQL and schema loaded via //go:embed.

* Deployed on Render with managed PostgreSQL.

* **Tech:** Go, PostgreSQL, pgx/v5, Docker, golang-migrate, slog