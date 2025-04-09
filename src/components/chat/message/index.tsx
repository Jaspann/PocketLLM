import OpenAILogo from '../../../assets/OpenAI.png'
import AnthropicLogo from '../../../assets/anthropic.png'
import GeminiLogo from '../../../assets/gemini.png'
import DeepSeekLogo from '../../../assets/deepseek.png'

import '../../../tailwind.css'

type ServiceType = 'OpenAI' | 'Claude' | 'Gemini' | 'DeepSeek'

const LOGO_MAP = {
  OpenAI: OpenAILogo,
  Claude: AnthropicLogo,
  Gemini: GeminiLogo,
  DeepSeek: DeepSeekLogo,
}

export function Message({
  service,
  role,
  message,
}: {
  service: string
  role: string
  message: string
}) {
  const logoSource = LOGO_MAP[service as ServiceType] || LOGO_MAP.DeepSeek
  const icon = (
    <view className="m-1 ml-3">
      <image className="display-icon" src={logoSource} />
    </view>
  )

  const isUser = role == 'user'

  return (
    <view>
      {!isUser && (
        <view>
          <view className="flex flex-row items-center">
            {icon}
            <text className="text-black flex-1 flex"> {service}</text>
          </view>
          <view className="w-full h-auto flex flex-row mx-1">
            <text className="text-black w-full flex-1 display-flex m-2">
              {message}
            </text>
          </view>
        </view>
      )}
      {isUser && (
        <view className="w-full h-auto flex flex-row rounded-2xl mx-1 my-4 bg-gray-200">
          <text className="text-black w-full flex-1 display-flex m-2">
            {message}
          </text>
        </view>
      )}
    </view>
  )
}
