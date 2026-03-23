# AI Model Registry - Requirements

## REQ-001: LiteLLM Data Source
**Priority:** P0
**Status:** TODO
Fetch and parse `model_prices_and_context_window.json` from LiteLLM GitHub.
- Fetch from: `https://raw.githubusercontent.com/BerriAI/litellm/main/model_prices_and_context_window.json`
- Parse 2,600+ models into normalized ModelInfo format
- Extract: model ID, provider, context window, max output, pricing, capability flags
- Cache with 1-hour TTL

## REQ-002: OpenRouter Data Source
**Priority:** P0
**Status:** TODO
Fetch model catalog from OpenRouter API.
- Endpoint: `GET https://openrouter.ai/api/v1/models`
- Auth: Bearer token from env `OPENROUTER_API_KEY`
- Extract: model ID, architecture, pricing, supported parameters
- Merge with LiteLLM data (OpenRouter has routing-specific fields)
- Cache with 1-hour TTL

## REQ-003: MCP Server Setup
**Priority:** P0
**Status:** TODO
Initialize MCP server using @modelcontextprotocol/sdk.
- Register tools: models.list, models.get, models.search, models.providers
- Serve via stdio transport (for Claude Code integration)
- Handle tool calls with proper input validation

## REQ-004: models.list Tool
**Priority:** P0
**Status:** TODO
List models with filters.
- Inputs: provider (optional), capability (optional), mode (optional)
- Returns: array of {id, name, provider, contextWindow, pricing}
- Support pagination (limit/offset)

## REQ-005: models.get Tool
**Priority:** P0
**Status:** TODO
Get full details for a specific model.
- Input: model ID string (exact match)
- Returns: complete ModelInfo object
- Fallback: fuzzy match if exact not found

## REQ-006: models.search Tool
**Priority:** P1
**Status:** TODO
Search models by query.
- Input: query string, filters
- Search across: name, provider, capabilities
- Returns: ranked results

## REQ-007: models.latest Tool
**Priority:** P1
**Status:** TODO
Get the latest/recommended model per provider.
- Input: provider name (optional)
- Returns: latest model(s) with release dates
- Useful for agents that need "give me the best current model from X"

## REQ-008: models.compare Tool
**Priority:** P2
**Status:** TODO
Compare models side-by-side.
- Input: array of model IDs
- Returns: comparison table (pricing, context, capabilities)

## REQ-009: models.pricing Tool
**Priority:** P2
**Status:** TODO
Price comparison and estimation.
- Input: model ID or provider, token count
- Returns: estimated cost, alternatives sorted by price

## REQ-010: Artificial Analysis Data Source
**Priority:** P2
**Status:** TODO
Fetch benchmark scores from Artificial Analysis API.
- Endpoint: `GET https://artificialanalysis.ai/api/v2/data/llms/models`
- Auth: x-api-key header from env `ARTIFICIAL_ANALYSIS_KEY`
- Merge benchmark scores into ModelInfo
- Cache with 6-hour TTL

## REQ-011: Cache Layer
**Priority:** P0
**Status:** TODO
In-memory cache with TTL.
- Store fetched data with configurable TTL per source
- Stale-while-revalidate pattern
- Persist to disk (JSON file) for cold start
