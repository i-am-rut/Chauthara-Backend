# Chauthara Backend

Backend service for Chauthara.

## Project Overview

Chauthara is a hybrid social platform combining:

- Personal identity graph interactions
- Community-based discussion spaces

The backend is implemented as a Domain-Oriented Modular Monolith following ADR-001.

---

## Technology Stack

### Runtime

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose

### Authentication

- JWT
- bcrypt

### Validation

- Zod

### Development Tooling

- ESLint

---

## Architecture

The backend follows a Domain-Oriented Modular Monolith architecture.

Primary domains:

- Identity
- Social Graph
- Community
- Content
- Media
- Governance
- Feed

Current architecture documentation is maintained separately in project documentation.

---

## Repository Structure

```text
src/

├── api/
├── bootstrap/
├── modules/
├── shared/
└── index.js

``` 
## API

Contains route registration and API entrypoints.

## Bootstrap

Contains application startup infrastructure.

## Modules

Contains domain modules.

## Shared

Contains reusable infrastructure, middleware, configuration, validation, and error handling.

## Environment Variables

Required:
```text
PORT=
MONGO_URI=
JWT_SECRET=
JWT_EXPIRES_IN=

```
## Installation
```bash
npm install

```
## Development
```bash
npm run dev

```
## Linting
```bash
npm run lint
npm run lint:fix

```

## Current Status

Implementation Phase

Completed Foundations:

Configuration Foundation
Database Foundation
Express Bootstrap Foundation
API Foundation
Error Foundation
Validation Foundation
Authentication Foundation

## Current Sprint:

Sprint 0

## Current Milestone:

Milestone 0 — Foundation

## Documentation

Primary project documentation:

PROJECT_CONTEXT.md
ARCHITECTURE.md
FEATURES.md
API_CONTRACTS.md
DATA_MODEL.md
DATABASE.md
INFRASTRUCTURE.md
ADR_INDEX.md
CURRENT_SPRINT.md