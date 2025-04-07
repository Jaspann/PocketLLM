import OpenAILogo from '../../../assets/OpenAI.png'
import AnthropicLogo from '../../../assets/anthropic.png'
import GeminiLogo from '../../../assets/gemini.png'
import DeepSeekLogo from '../../../assets/deepseek.png'

import "./styles.css"

type ServiceType = 'OpenAI' | 'Gemini' | 'Claude' | 'DeepSeek';

const LOGO_MAP = {
  OpenAI: OpenAILogo,
  Gemini: GeminiLogo,
  Claude: AnthropicLogo,
  DeepSeek: DeepSeekLogo,
};

export function Message({ sender, message }: { sender: string; message: string }) {

  const logoSource = LOGO_MAP[sender as ServiceType] || LOGO_MAP.DeepSeek;
  const icon = <image className='serviceLogo message' src={logoSource} />

  const isUser = sender == "user";

  return (
    <view>
        {!isUser && (
          <view>
            <view className='serviceTitle'>
              {icon}
              <text className='messageServiceName'> {sender}</text>
            </view>
          <view className='messageBox'>
            <text className='message'> {message}</text>
          </view>
          </view>
        )}
        {isUser && (
          <view className='messageBox user'>
            <text className='message'> {message}</text>
          </view>
        )}
    </view>
  )
}
