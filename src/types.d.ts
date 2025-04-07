declare global {
  type Message = {
    id: string
    service: string
    role: string
    content: string
  }

  interface ApiKeys {
    openAi: string
    anthropic: string
    gemini: string
    deepSeek: string
  }
}

export {}
