import OpenAILogo from '../../../assets/OpenAI.png'
import AnthropicLogo from '../../../assets/anthropic.png'
import GeminiLogo from '../../../assets/gemini.png'
import DeepSeekLogo from '../../../assets/deepseek.png'

import "./styles.css"

export function ServiceSelector({ service }: { service: string }) {

  let icon;
  if (service == "OpenAI")
  {
    icon = <image className='serviceLogo' src={OpenAILogo} />
  }
  else if (service == "Gemini")
  {
    icon = <image className='serviceLogo' src={AnthropicLogo} />
  }
  else if (service == "Claude")
  {
    icon = <image className='serviceLogo' src={GeminiLogo} />
  }
  else
  {
    icon = <image className='serviceLogo' src={DeepSeekLogo} />
  }

  return (
    <view>
      <view className='serviceBox'>
        {icon}
        <text className='serviceName'> {service}</text>
      </view>
    </view>
  )
}
