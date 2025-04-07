import { root, useCallback, useEffect, useState } from '@lynx-js/react'
import { MemoryRouter, Routes, Route, Outlet } from 'react-router';

import './App.css'

import {TopBar} from './components/top-bar/index.jsx'
import {Input} from './components/input/index.jsx'
import { Settings } from './components/settings/index.jsx'
import { Chat } from './components/chat/index.jsx'

export function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user"
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const home = 
    <view className='chat-container'>
      <Chat messages={messages} />
      <Input onSendMessage={handleSendMessage} />
    </view>
  
  return (
    <view>
      <view className='App'>
        <TopBar />
        <Routes>
          <Route path="/" element={ home } />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </view>
    </view>
  )
}