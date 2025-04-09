import { useCallback, useState } from '@lynx-js/react'

import { TopBar } from './components/TopBar.jsx'
import { Input } from './components/Input.jsx'
import { Settings } from './components/Settings.jsx'
import { Chat } from './components/Chat.jsx'

import sendRequest from './utils.js'

export function App() {
  const [messages, setMessages] = useState<Message[]>([])
  const [showSettings, setShowSettings] = useState(false)
  const [apiKeys, setApiKeys] = useState({
    openAi: '',
    anthropic: '',
    gemini: '',
    deepSeek: '',
  })

  const handleUpdateApiKeys = useCallback((keys: ApiKeys) => {
    setApiKeys(keys)
    setShowSettings(false)
  }, [])

  const handleSendMessage = async (message: string, service: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      service: service,
      role: 'user',
      content: message,
    }

    const updatedMessages = [...messages, newMessage]

    setMessages(updatedMessages)

    const response = await sendRequest(updatedMessages, service, apiKeys)

    const responseMessage: Message = {
      id: Date.now().toString(),
      service: service,
      role: 'assistant',
      content: response,
    }

    setMessages((prevMessages) => [...prevMessages, responseMessage])
  }

  const home = (
    <view className="relative min-h-screen flex flex-col items-center justify-center">
      <TopBar onSettingsClick={() => setShowSettings(true)} />
      <view className="flex flex-1 flex-col w-full p-2">
        <Chat messages={messages} />
        <Input onSendMessage={handleSendMessage} />
      </view>
    </view>
  )

  return (
    <view>
      <view>
        {showSettings ? (
          <Settings
            apiKeys={apiKeys}
            onUpdateApiKeys={handleUpdateApiKeys}
            onBack={() => setShowSettings(false)}
          />
        ) : (
          home
        )}
      </view>
    </view>
  )
}
