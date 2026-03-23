# AI Model Registry

An MCP server that aggregates and serves AI model information across all major providers.

## Problem

AI tools and agents constantly use outdated model IDs. There is no single, reliable, programmatic source for current model identifiers, pricing, context windows, and capabilities across all providers.

## Solution

A lightweight MCP server that:
1. Fetches model data from aggregators (LiteLLM, OpenRouter, Artificial Analysis)
2. Caches locally with configurable TTL
3. Serves via MCP tools for any AI agent or CLI to consume

## Data Sources

| Source | Coverage | Auth | URL |
|--------|----------|------|-----|
| LiteLLM JSON | 2,600+ models | None | `https://raw.githubusercontent.com/BerriAI/litellm/main/model_prices_and_context_window.json` |
| OpenRouter API | 400+ models | Free key | `https://openrouter.ai/api/v1/models` |
| Artificial Analysis | Benchmarked models | Free key | `https://artificialanalysis.ai/api/v2/data/llms/models` |

## MCP Tools

- `models.list` - List all models, filterable by provider/capability
- `models.get` - Get full details for a specific model ID
- `models.search` - Search models by name, capability, or price range
- `models.providers` - List all providers
- `models.compare` - Compare models side-by-side
- `models.latest` - Get the latest/recommended model per provider
- `models.pricing` - Get pricing for a model or compare pricing

## Providers Covered

Anthropic, OpenAI, Google/Gemini, Kimi/Moonshot, MiniMax, DeepSeek, Meta/Llama, Mistral, xAI/Grok, Cohere, GLM/Zhipu, Together, Fireworks, Groq, OpenRouter, AWS Bedrock, Azure, Vertex AI

## Tech Stack

- TypeScript + Hono
- MCP SDK (@modelcontextprotocol/sdk)
- Local JSON cache with TTL
- Zero external dependencies beyond fetch

## Architecture

```
src/
  index.ts          - MCP server entry point
  sources/
    litellm.ts      - LiteLLM data fetcher
    openrouter.ts   - OpenRouter API fetcher
    artificial.ts   - Artificial Analysis fetcher
  tools/
    models.ts       - MCP tool definitions
  cache/
    store.ts        - Local cache with TTL
  types.ts          - Shared types
```
