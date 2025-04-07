import { useCallback, useEffect, useState } from '@lynx-js/react'
import menuIcon from "../../assets/menu.png";
import settingsIcon from "../../assets/settings.png";
import { useNavigate } from 'react-router';

import "./styles.css"

export function TopBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const nav = useNavigate();

  const onTapMenu = useCallback(() => {
    'background only'
    setSidebarOpen(!sidebarOpen)
  }, [sidebarOpen])

  const onTapSettings = useCallback(() => {
    nav('/settings')
  }, [sidebarOpen])

  return (
    <view>
      <view className='statusBar' />
      <view className='menu'>
        <view bindtap={onTapMenu}>
          <image src={menuIcon} className='menuIcon'/>
        </view>
        <text className='chatTitle'>Pocket LLM</text>
        <view bindtap={onTapSettings}>
          <image src={settingsIcon} className='settingsIcon'/>
        </view>
      </view>
    </view>
  )
}
