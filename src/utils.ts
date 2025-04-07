type filteredMessages = {
  role: string
  content: string
}

const callOpenAI = async (
  messages: Message[],
  apiKey: string
): Promise<string> => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'o3-mini-2025-01-31',
        messages: messages,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`API call failed: ${JSON.stringify(errorData)}`)
    }

    const json = await response.json()
    return json.choices[0].message.content
  } catch (error) {
    console.error('Error calling OpenAI API:', error)
    throw error
  }
}

const callAnthropic = async (
  messages: filteredMessages[],
  apiKey: string
): Promise<string> => {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-3-7-sonnet-20250219',
        max_tokens: 8192,
        messages: messages,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`API call failed: ${JSON.stringify(errorData)}`)
    }

    const json = await response.json()
    return json.content[0].text // Extract just the response text
  } catch (error) {
    console.error('Error calling Anthropic API:', error)
    throw error
  }
}

const callGemini = async (
  messages: filteredMessages[],
  apiKey: string
): Promise<string> => {
  try {
    const geminiContents = messages.map((msg) => ({
      role: msg.role === 'assistant' ? 'model' : msg.role,
      parts: [
        {
          text: msg.content,
        },
      ],
    }))

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: geminiContents,
        }),
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`API call failed: ${JSON.stringify(errorData)}`)
    }

    const json = await response.json()
    return json.candidates[0].content.parts[0].text
  } catch (error) {
    console.error('Error calling OpenAI API:', error)
    throw error
  }
}

const callDeepSeek = async (
  messages: Message[],
  apiKey: string
): Promise<string> => {
  try {
    const response = await fetch(
      'https://api.deepseek.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: messages,
          stream: false,
        }),
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`API call failed: ${JSON.stringify(errorData)}`)
    }

    const json = await response.json()
    return json.choices[0].message.content
  } catch (error) {
    console.error('Error calling OpenAI API:', error)
    throw error
  }
}

export default async function sendRequest(
  messages: Message[],
  provider: string,
  apiKeys: ApiKeys
): Promise<string> {
  if (provider == 'OpenAI') {
    return callOpenAI(messages, apiKeys.openAi)
  }
  if (provider == 'Claude') {
    const filteredMessages = messages.map(({ role, content }) => ({
      role,
      content,
    }))
    return callAnthropic(filteredMessages, apiKeys.anthropic)
  }
  if (provider == 'Gemini') {
    const filteredMessages = messages.map(({ role, content }) => ({
      role,
      content,
    }))
    return callGemini(filteredMessages, apiKeys.gemini)
  }
  if (provider == 'DeepSeek') {
    return callDeepSeek(messages, apiKeys.deepSeek)
  }

  return ''
}
