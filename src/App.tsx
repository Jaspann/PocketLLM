import { useCallback, useState } from '@lynx-js/react'

import './App.css'

import {TopBar} from './components/top-bar/index.jsx'
import {Input} from './components/input/index.jsx'
import { Settings } from './components/settings/index.jsx'
import { Chat } from './components/chat/index.jsx'

export function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [showSettings, setShowSettings] = useState(false);
  const [apiKeys, setApiKeys] = useState({
    openAi: ' ',
    anthropic: ' ',
    gemini: ' ',
    deepSeek: ' '
  });

  const handleUpdateApiKeys = useCallback((keys: {
    openAi: string,
    anthropic: string,
    gemini: string,
    deepSeek: string
  }) => {
    setApiKeys(keys);
    setShowSettings(false);
  }, []);

  const handleSendMessage = async (message: string, service: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      service: service,
      role:"user",
      content: message
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const home = 
    <view className='App'>
      <TopBar onSettingsClick={() => setShowSettings(true)} />
      <view className='chat-container'>
        <Chat messages={messages} />
        <Input onSendMessage={handleSendMessage} />
      </view>
    </view>

  return (
    <view>
      <view>
        {showSettings ? (
          <Settings 
            apiKeys={apiKeys}
            onUpdateApiKeys={handleUpdateApiKeys}
            onBack={() => setShowSettings(false)}
          />
        ) : (home)}
      </view>
    </view>
  )
}