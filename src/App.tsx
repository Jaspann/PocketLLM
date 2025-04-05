import { root, useCallback, useEffect, useState } from '@lynx-js/react'
import { MemoryRouter, Routes, Route, Outlet } from 'react-router';

import './App.css'

import {TopBar} from './components/top-bar/index.jsx'
import {Input} from './components/input/index.jsx'
import { Settings } from './components/settings/index.jsx'

export function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: any) => {
      setInputValue(event.target.value);
  }

  if (import.meta.webpackHot) {
    import.meta.webpackHot.accept();
  }

  
  return (
    <view>
      <view className='Background' />
      <view className='App'>
        <TopBar />
        <Routes>
          <Route path="/" element={
            <view>
              <view className='Banner'>
                <text className='Title'>React</text>
                <text className='Subtitle'>on Lynx</text>
                
            <input 
                type="text" 
                value={inputValue} 
                onInput={handleInputChange} 
                placeholder="Enter something..." 
                className="input-box"
            />
              </view>
            </view>
          } />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Input />
      </view>
    </view>
  )
}