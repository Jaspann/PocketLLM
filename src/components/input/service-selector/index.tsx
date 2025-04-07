import OpenAILogo from '../../../assets/OpenAI.png'
import AnthropicLogo from '../../../assets/anthropic.png'
import GeminiLogo from '../../../assets/gemini.png'
import DeepSeekLogo from '../../../assets/deepseek.png'

import "./styles.css"

type ServiceType = 'OpenAI' | 'Gemini' | 'Claude' | 'DeepSeek';

const LOGO_MAP = {
  OpenAI: OpenAILogo,
  Gemini: AnthropicLogo,
  Claude: GeminiLogo,
  DeepSeek: DeepSeekLogo,
};

export function ServiceSelector({ service }: { service: string }) {

  const logoSource = LOGO_MAP[service as ServiceType] || LOGO_MAP.DeepSeek;
  const icon = <image className='serviceLogo' src={logoSource} />

  return (
    <view>
      <view className='serviceBox'>
        {icon}
        <text className='serviceName'> {service}</text>
      </view>
    </view>
  )
}
