import menuIcon from '../../assets/menu.png'
import settingsIcon from '../../assets/settings.png'

interface TopBarProps {
  onSettingsClick: () => void
}

export function TopBar({ onSettingsClick }: TopBarProps) {
  return (
    <view>
      <view className="fixed bg-white w-full h-24 flex flex-row items-center px-2 pt-12">
        <view>
          <image src={menuIcon} className="w-8 h-8" />
        </view>
        <text className="flex-1 text-center text-black">Pocket LLM</text>
        <view bindtap={onSettingsClick}>
          <image src={settingsIcon} className="w-8 h-8" />
        </view>
      </view>
    </view>
  )
}
