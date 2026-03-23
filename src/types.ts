export interface ModelInfo {
  id: string;
  name: string;
  provider: string;
  contextWindow: number;
  maxOutput: number;
  pricing: {
    inputPerMTok: number;
    outputPerMTok: number;
    cacheReadPerMTok?: number;
    cacheWritePerMTok?: number;
  };
  capabilities: {
    vision: boolean;
    functionCalling: boolean;
    reasoning: boolean;
    audio: boolean;
    video: boolean;
    pdf: boolean;
    promptCaching: boolean;
  };
  mode: "chat" | "embedding" | "image_generation" | "audio" | "other";
  releaseDate?: string;
  deprecationDate?: string;
  apiBaseUrl?: string;
}

export interface Provider {
  id: string;
  name: string;
  apiBaseUrl: string;
  models: string[];
}

export interface CacheEntry<T> {
  data: T;
  fetchedAt: number;
  ttlMs: number;
}
