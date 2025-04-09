import { useCallback, useState } from '@lynx-js/react'
import { ServiceSelector } from './ServiceSelector.jsx'
import UpArrowImage from '../assets/icons/upArrow.png'

interface TextInputBarProps {
  onSendMessage: (message: string, service: string) => void
}

export function Input({ onSendMessage }: TextInputBarProps) {
  const [inputValue, setInputValue] = useState('')
  const [selectedService, setSelectedService] = useState('OpenAI')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: any) => {
    const currentValue = e.detail.value.trim()
    setInputValue(currentValue)
  }

  const handleServiceSelect = (service: string) => {
    setSelectedService(service)
  }

  const handleSend = useCallback(() => {
    'background only'
    if (inputValue.trim()) {
      onSendMessage(inputValue, selectedService)
      setInputValue('')
    }
  }, [inputValue])

  return (
    <view>
      <view className="fixed bottom-0 left-0 bg-white w-full h-[100px] flex flex-col">
        <view className="flex flex-row">
          <view className="w-[85%] bg-gray-200 p-2.5 ml-2.5 mt-2.5 rounded-lg">
            <input
              // @ts-expect-error Lynx has a different input function then what is expected.
              bindinput={handleInputChange}
              type="text"
              value={inputValue}
              placeholder="Ask a question..."
              className="w-full h-full"
            />
          </view>
          <view className="bg-[#08e6ff] w-12 h-12 rounded-full ml-2 mt-2 flex items-center justify-center">
            <image
              src={UpArrowImage}
              className="display-icon"
              bindtap={handleSend}
            ></image>
          </view>
        </view>

        <scroll-view
          scroll-orientation="horizontal"
          className="flex flex-row mx-auto w-full flex-1 my-2.5"
        >
          <ServiceSelector
            service="OpenAI"
            isSelected={selectedService === 'OpenAI'}
            onSelect={handleServiceSelect}
          />
          <ServiceSelector
            service="Claude"
            isSelected={selectedService === 'Claude'}
            onSelect={handleServiceSelect}
          />
          <ServiceSelector
            service="Gemini"
            isSelected={selectedService === 'Gemini'}
            onSelect={handleServiceSelect}
          />
          <ServiceSelector
            service="DeepSeek"
            isSelected={selectedService === 'DeepSeek'}
            onSelect={handleServiceSelect}
          />
        </scroll-view>
      </view>
    </view>
  )
}
