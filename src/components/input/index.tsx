import { useCallback, useState } from '@lynx-js/react'
import { ServiceSelector } from './service-selector/index.jsx'
import UpArrowImage from '../../assets/upArrow.png'

import "./styles.css"

interface TextInputBarProps {
  onSendMessage: (message: string) => void;
}

export function Input({ onSendMessage }: TextInputBarProps) {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: any) => {
    const currentValue = e.detail.value.trim();
    setInputValue(currentValue);
  };

  const handleSend = useCallback(() => {
    'background only'
    if (inputValue.trim()) {
      onSendMessage(inputValue);
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
          <ServiceSelector service={"OpenAI"} />
          <ServiceSelector service={"Gemini"} />
          <ServiceSelector service={"Claude"} />
          <ServiceSelector service={"DeepSeek"} />

        </scroll-view>

      </view>
    </view>
  )
}
