import OpenAILogo from '../assets/services/OpenAI.png'
import AnthropicLogo from '../assets/services/anthropic.png'
import GeminiLogo from '../assets/services/gemini.png'
import DeepSeekLogo from '../assets/services/deepseek.png'

import './ServiceSelector.css'

type ServiceType = 'OpenAI' | 'Gemini' | 'Claude' | 'DeepSeek'

const LOGO_MAP = {
  OpenAI: OpenAILogo,
  Gemini: GeminiLogo,
  Claude: AnthropicLogo,
  DeepSeek: DeepSeekLogo,
}

interface ServiceSelectorProps {
  service: string
  isSelected: boolean
  onSelect: (service: string) => void
}

export function ServiceSelector({
  service,
  isSelected,
  onSelect,
}: ServiceSelectorProps) {
  const logoSource = LOGO_MAP[service as ServiceType] || LOGO_MAP.DeepSeek
  const icon = <image className="display-icon" src={logoSource} />

  const handleClick = () => {
    onSelect(service)
  }

  return (
    <view bindtap={handleClick}>
      <view className={`serviceBox ${isSelected ? 'selected' : ''}`}>
        {icon}
        <text className="text-black flex-1 text-center flex justify-center items-center">
          {service}
        </text>
      </view>
    </view>
  )
}
