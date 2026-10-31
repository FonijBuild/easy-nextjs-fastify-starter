 <div align="center">

# Easy Next.js + Fastify Starter

**A production-capable TypeScript monorepo foundation for full-stack products, with independent web and API applications and shared packages.**

[![Use this template](https://img.shields.io/badge/use%20this%20template-2EA44F?logo=github&logoColor=white)](https://github.com/FonijBuild/easy-nextjs-fastify-starter/generate)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)

![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white) ![Fastify](https://img.shields.io/badge/Fastify-000000?logo=fastify&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![pnpm](https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white) ![Turborepo](https://img.shields.io/badge/Turborepo-EF4444?logo=turborepo&logoColor=white) ![Zod](https://img.shields.io/badge/Zod-3E67B1?logo=zod&logoColor=white) ![Biome](https://img.shields.io/badge/Biome-60A5FA?logo=biome&logoColor=white)

[Documentation](https://github.com/FonijBuild/fonij-docs) · [Discussions](https://github.com/orgs/FonijBuild/discussions) · [Issues](https://github.com/FonijBuild/easy-nextjs-fastify-starter/issues)

</div>

> “What do we build for, if not to lessen each other’s hardship?”

## Best for

- Full-stack TypeScript applications with separate web and API layers
- SaaS products with independently deployable frontend and backend
- Products sharing types, validation schemas, and contracts across applications
- Applications that may grow to include additional services or clients
- Teams that prefer a structured monorepo over multiple repositories

**Not for:** Simple frontend-only applications that can be handled by Next.js alone, or complex distributed systems requiring a dedicated microservices architecture.

## Baseline

- Next.js App Router frontend and Fastify API backend
- pnpm workspaces and Turborepo for monorepo management
- Shared TypeScript packages with clear public interfaces
- Zod schemas for runtime validation and shared data contracts
- Strict TypeScript configuration and native ESM
- Biome for consistent linting and formatting
- API proxy configuration and health check endpoint
- Independent application builds and deployment boundaries
- GitHub Actions CI for quality checks and production builds
- AI-agent rules, specs, and architecture documentation

## Architecture

```text
.
├── apps/
│   ├── web/                 # Next.js application
│   └── api/                 # Fastify API
│
├── packages/
│   └── shared/              # Shared types, schemas, utilities
│
├── .fonij/                 # Fonij starter metadata
├── docs/                    # Architecture and documentation
├── specs/                   # Feature specifications
│
├── AGENTS.md                # AI coding agent instructions
├── biome.json               # Linting and formatting
├── pnpm-workspace.yaml      # Workspace configuration
├── turbo.json               # Task orchestration
├── tsconfig.base.json       # Shared TypeScript configuration
└── package.json             # Root scripts and tooling
```

### Application boundaries

| Application / Package | Responsibility                                   |
| --------------------- | ------------------------------------------------ |
| `apps/web`            | Frontend, UI, routing, and user experience       |
| `apps/api`            | HTTP API, business logic, and backend operations |
| `packages/shared`     | Shared types, schemas, constants, and utilities  |

Applications consume shared packages through workspace dependencies rather than importing files across application boundaries.

## Quick start

**Prerequisites:** Node.js 22+ and pnpm 10+.

Preferred:

```bash
fonij create my-product
```

Direct template use:

```bash
gh repo create my-product --template FonijBuild/easy-nextjs-fastify-starter --private --clone

cd my-product

pnpm install
pnpm dev
```

The development command builds shared packages and starts the applications.

### Development

| Application              | URL                              |
| ------------------------ | -------------------------------- |
| Web                      | http://localhost:3000            |
| API                      | http://localhost:4000            |
| API health check         | http://localhost:4000/health     |
| Proxied API health check | http://localhost:3000/api/health |

The frontend proxies `/api/*` requests to the Fastify backend through Next.js rewrites.

The default API destination is `http://localhost:4000`. Override it using `API_INTERNAL_URL` in `apps/web/.env.local` when necessary.

### Available commands

```bash
# Development
pnpm dev

# Build all applications and packages
pnpm build

# Type checking
pnpm check-types

# Lint and formatting checks
pnpm lint

# Automatically fix linting issues
pnpm lint:fix

# Format the repository
pnpm format
```

## Project contract

- `.fonij/starter.json` describes this foundation to Fonij.
- `AGENTS.md` defines repository rules for AI coding agents.
- `specs/` contains implementation-ready feature specifications.
- `docs/` contains architecture and repository-specific guidance.
- `packages/shared` maintains reusable, environment-independent contracts.
- Keep quality checks green before merging changes.

## Architecture principles

- **Clear boundaries:** Web and API remain independent applications.
- **Shared contracts:** Reuse types and validation schemas instead of duplicating them.
- **Explicit dependencies:** Every package declares its own dependencies.
- **Independent deployment:** Build and deploy applications separately.
- **Minimal by default:** Add infrastructure and dependencies only when the product needs them.
- **AI-first development:** Keep specifications, architecture, and coding rules accessible to humans and AI agents.

This starter provides the application and tooling foundation, not a predefined business domain. Database, authentication, background processing, and other infrastructure can be introduced according to product requirements.

## Contributing

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before contributing. Security issues must follow [`SECURITY.md`](SECURITY.md).
