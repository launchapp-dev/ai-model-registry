# AI Model Registry - Agent Instructions

## Project Overview
MCP server that aggregates AI model information from LiteLLM, OpenRouter, and Artificial Analysis. Serves model IDs, pricing, context windows, and capabilities via MCP tools.

## Tech Stack
- TypeScript, Hono, MCP SDK
- Data sources: LiteLLM JSON (primary), OpenRouter API, Artificial Analysis API

## Key Rules
- Read VISION.md every run for full architecture
- NEVER remove features or tools. Only ADD and IMPROVE
- Keep the server lightweight - minimal dependencies
- Cache aggressively - data sources update daily, not per-request
- All model IDs must be exact API-compatible strings
- Test with real data from the sources before merging

## File Structure
```
src/index.ts          - MCP server entry
src/sources/*.ts      - Data fetchers
src/tools/*.ts        - MCP tool definitions
src/cache/store.ts    - TTL cache
src/types.ts          - Shared types
```

## Commands
- `pnpm dev` - Start dev server
- `pnpm build` - Build
- `pnpm test` - Run tests
