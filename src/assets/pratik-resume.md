<div class="center">

<span class="smallcaps">Protik Dev</span>\
Chattogram, Bangladesh $`|`$ [<u>pratikdevofficial1@gmail.com</u>](mailto:pratikdevofficial1@gmail.com) $`|`$ +880-1537220785\
[<u>Github</u>](https://github.com/PratikDev) $`|`$ [<u>LinkedIn</u>](https://linkedin.com/in/pratik-and-dev) $`|`$ [<u>Portfolio</u>](https://iam-pratik.vercel.app)

</div>

# Summary

Full-stack software engineer (TypeScript, Next.js, Go) with $`\sim`$<!-- -->3 years of corporate experience and 2+ years of freelance experience, building products from UI to production infrastructure.

# Education

- |                                             |                          |
  |:--------------------------------------------|-------------------------:|
  | **BGC Trust University**                    |                          |
  | *B.Sc. in Computer Science and Engineering* | *Chattogram, Bangladesh* |

# Professional Experience

- |                                                 |                         |
  |:------------------------------------------------|------------------------:|
  | **[<u>Devspace</u>](https://www.devspace.so/)** | **Mar 2026 – Aug 2026** |
  | *Software Engineer*                             |                         |

  -  Built full-stack React and TypeScript features on an **agentic AI pipeline** (Mastra AI, Convex, Vercel AI SDK).

  -  Built a **dynamic tool registry**: agent tools are stored in the database and discovered at runtime, not hardcoded.

  -  Contributed to CI/CD pipeline configuration and deployment automation.

  -  **Tech:** *React, TypeScript, Mastra AI, Convex, Vercel AI SDK, GitHub Actions, Codex*

- |                                           |                         |
  |:------------------------------------------|------------------------:|
  | **[<u>Osilion</u>](https://osilion.no/)** | **Jul 2025 – Feb 2026** |
  | *Full-Stack Engineer*                     |                         |

  -  Served as one of the **primary engineers** on a client’s internal tool for improving employee productivity.

  -  Worked on an intelligent recruitment platform, contributing to its technical architecture, database design, and component design patterns.

  -  Mentored a junior developer through regular code reviews.

  -  **Tech:** *Next.js, TypeScript, Tailwind, shadcn/ui, Zustand, Appfarm (low-code), Azure*

- |                                     |                         |
  |:------------------------------------|------------------------:|
  | **[<u>Hone</u>](https://hone.gg/)** | **Aug 2025 – Sep 2025** |
  | *Frontend Engineer*                 |                         |

  -  Implemented a **Smart Scaling system** that automatically adapts the desktop app to smaller screens.

  -  Owned the review and download pages end to end; found and fixed a small-screen layout issue with a CSS grid pattern, validated through manual cross-device testing.

  -  Improved code splitting and lazy loading to cut initial load weight, and fixed a keyboard focus-visibility issue.

  -  **Tech:** *React, TypeScript, Tailwind, shadcn/ui*

- |  |  |
  |:---|---:|
  | **[<u>Hello World Communications</u>](https://software.helloworldbd.com/)** | **Sep 2024 – Jul 2025** |
  | *Full-Stack Engineer* |  |

  -  **Led the development flow end to end** across multiple concurrent client projects, conducting code reviews and making key architectural decisions.

  -  Reduced client closing time by **roughly 50%** through better scoping and client-to-team delivery alignment.

  -  Mentored a junior developer across multiple client projects.

  -  **Tech:** *Next.js, TypeScript, Go, shadcn/ui, TanStack Query, Zustand, Drizzle ORM, Appwrite, Firebase, Docker*

- |                       |                         |
  |:----------------------|------------------------:|
  | **Bilsida**           | **Oct 2023 – Aug 2024** |
  | *Full-Stack Engineer* |                         |

  -  Built a Swedish car marketplace **from scratch across the full stack**; it went on to attract **two of Sweden’s largest car dealers**.

  -  Owned backend logic, database schema design, image optimization, and SEO.

  -  Mentored a junior developer in building a chat system.

  -  **Tech:** *Next.js, TypeScript, Tailwind, shadcn/ui, Appwrite, Docker, Context API*

- |  |  |
  |:---|---:|
  | **[<u>Fiverr</u>](https://www.fiverr.com/pratik_dev)** | **Jul 2021 – Oct 2023** |
  | *Freelance Full-Stack Developer* | *Remote* |

  -  Delivered full-stack web applications and APIs for **20+ clients**, covering frontend, backend, and deployment.

# Backend & Systems Projects

- |  |  |
  |:---|---:|
  | **Spud** | [<u>Live</u>](https://spud-bot.onrender.com/) $`|`$ [<u>Source</u>](https://github.com/PratikDev/spud) |

  -  Built and deployed to production a Discord bot for small-team task coordination with Gemini-powered features: **duplicate-task detection** that blocks redundant work at claim time, and a **scope-drift detector** that diffs a git branch against its natural-language task description and pings the owner in-channel when work strays outside the claimed scope.

  -  Engineered a **GitHub App integration** end to end: short-lived installation tokens, an app-level **Webhook Pipeline**, per-project **Rate Limiting**, and automatic task closure on PR merge.

  -  Added a **Role-based Permission Model** (team lead vs. server admin) enforced in application code.

  -  Set up **production observability**: structured JSON logging shipped to **Grafana Loki**, plus **Synthetic Monitoring** with uptime alerting; containerized with Docker on a hosted Turso (libSQL) database.

  -  **Tech:** *TypeScript, Bun, discord.js, GitHub Apps API, GitHub Actions, Gemini, Vercel AI SDK, SQLite/Turso, Grafana (Loki + Synthetic Monitoring), Docker*

- |  |  |
  |:---|---:|
  | **Result Lookup** | [<u>Source</u>](https://github.com/PratikDev/result-lookup) |

  -  Designed and built a high-throughput exam result publishing system **serving 2M results**.

  -  Reached **$`\sim`$<!-- -->32k RPS** peak with **p99 under 105 ms at 1,000 concurrent connections**, backed by a PostgreSQL fallback with connection limiting.

  -  **Tech:** *Go, PostgreSQL, Redis, pgx/v5, Docker, golang-migrate, slog, miniredis*

- |  |  |
  |:---|---:|
  | **URL Health Checker** | [<u>Source</u>](https://github.com/PratikDev/url-health-checker) |

  -  Built an async job queue with separate API and worker binaries; workers claim jobs via `SELECT ... FOR UPDATE SKIP LOCKED`, with **exponential backoff written in SQL**, atomic with status updates.

  -  Recovered stale jobs with a staleness threshold instead of a heartbeat, avoiding a race on bounded-duration jobs; graceful shutdown via `signal.NotifyContext`, with integration tests against real PostgreSQL.

  -  **Tech:** *Go, PostgreSQL, pgx/v5, Docker, golang-migrate, slog*

# Full-Stack Projects

- |  |  |
  |:---|---:|
  | **Narrative Guard** | [<u>Live</u>](https://narrative-guard.vercel.app/) $`|`$ [<u>Source</u>](https://github.com/PratikDev/narrative-guard) |

  -  Built a workspace-based brand governance platform with **role-based ownership enforcement** and **per-brand RAG namespaces** for workspace isolation.

  -  Built the audit flow end to end (score, verdict, findings, and an AI rewrite) in a responsive Next.js UI, with invite tokens stored as hashes and scheduled Convex actions handling async audit processing.

  -  **Tech:** *Next.js, TypeScript, Convex, Convex Auth, Google Gemini, RAG, shadcn/ui, Vitest, React Testing Library*

- |  |  |
  |:---|---:|
  | **Roadmap App** | [<u>Live</u>](https://bitcode-roadmap-app.vercel.app/) $`|`$ [<u>Source</u>](https://github.com/PratikDev/roadmap-app) |

  -  Built a full-stack app with SSR, authentication, a REST API, and upvoting and commenting.

  -  Covered with tests using Jest and React Testing Library.

  -  **Tech:** *Next.js, TypeScript, Drizzle ORM, PostgreSQL, Vercel, Jest, React Testing Library*

# Technical Skills

<div class="itemize">

**Languages**: TypeScript, JavaScript, Go, SQL\
**Frameworks**: React.js, Next.js (SSR, ISR, SSG), Node.js, Express.js\
**Frontend**: Tailwind CSS, shadcn/ui, Framer Motion\
**State Management**: Context API, Zustand, React Query\
**Databases**: PostgreSQL, MongoDB, MySQL, SQLite, Redis, Drizzle ORM\
**AI & Agents**: Vercel AI SDK, Google Gemini, RAG, Claude Code, Codex\
**DevOps/Infra**: Docker, GitHub Actions, Vercel, Firebase, Appwrite, Convex, AWS (basic)\
**Testing & Tools**: Git, Jest, Vitest, React Testing Library\
**Soft Skills**: Communication, Ownership, Leadership, Collaboration, Analytical Thinking, Friendly & Approachable

</div>
