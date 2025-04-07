declare global {
  type Message = {
    id: string;
    service: string;
    role: string;
    content: string;
  }
}

export {};