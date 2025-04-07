import { useCallback, useState } from '@lynx-js/react'
import { ServiceSelector } from './service-selector/index.jsx'
import UpArrowImage from '../../assets/upArrow.png'

import "./styles.css"

interface TextInputBarProps {
  onSendMessage: (message: string, service: string) => void;
}

export function Input({ onSendMessage }: TextInputBarProps) {

  const [inputValue, setInputValue] = useState('');
  const [selectedService, setSelectedService] = useState('OpenAI');

  const handleInputChange = (e: any) => {
    const currentValue = e.detail.value.trim();
    setInputValue(currentValue);
  };

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
  };

  const handleSend = useCallback(() => {
    'background only'
    if (inputValue.trim()) {
      onSendMessage(inputValue, selectedService);
      setInputValue('');
    }
  }, [inputValue])

  return (
    <view>
      <view className='bottomMenu'>
        <view className='inputRow'>
          <view className='inputBox'>
            <input 
                // @ts-ignore
                bindinput={handleInputChange} 
                type="text" 
                value={inputValue} 
                placeholder="Ask a question..." 
                className="inputComponent"
            />
          </view>
          <view className='sendMessage' >
            <image src={UpArrowImage} className='sendArrow' bindtap={handleSend}></image>
          </view>
        </view>
        
        <scroll-view
          scroll-orientation="horizontal"
          className='serviceScroll'
        >
          <ServiceSelector 
            service="OpenAI" 
            isSelected={selectedService === "OpenAI"}
            onSelect={handleServiceSelect}
          />
          <ServiceSelector 
            service="Gemini" 
            isSelected={selectedService === "Gemini"}
            onSelect={handleServiceSelect}
          />
          <ServiceSelector 
            service="Claude" 
            isSelected={selectedService === "Claude"}
            onSelect={handleServiceSelect}
          />
          <ServiceSelector 
            service="DeepSeek" 
            isSelected={selectedService === "DeepSeek"}
            onSelect={handleServiceSelect}
          />

        </scroll-view>

      </view>
    </view>
  )
}
