import menuIcon from "../../assets/menu.png";
import settingsIcon from "../../assets/settings.png";

import "./styles.css"

interface TopBarProps {
  onSettingsClick: () => void;
}

export function TopBar( {onSettingsClick}: TopBarProps ) {

  return (
    <view>
      <view className='statusBar' />
      <view className='menu'>
        <view>
          <image src={menuIcon} className='menuIcon'/>
        </view>
        <text className='chatTitle'>Pocket LLM</text>
        <view bindtap={onSettingsClick}>
          <image src={settingsIcon} className='settingsIcon'/>
        </view>
      </view>
    </view>
  )
}
