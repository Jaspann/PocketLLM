import { root, useEffect, useState } from "@lynx-js/react";

const anthropic = {
  url: "https://api.anthropic.com/v1/messages",
  method: "POST",
  headers: {
    'x-api-key': null,
    'anthropic-version': '2023-06-01',
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    model: null,
    messages: [
      {
        role: 'user',
        content: null
      }
    ]
  })

}


export default async function sendRequest(messages: Message[], provider: string, apiKey: string)
{

}