declare global {
  type Message = {
    id: string;
    text: string;
    sender: string;
  }
}

export {};