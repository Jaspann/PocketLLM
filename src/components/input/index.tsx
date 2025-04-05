import { ServiceSelector } from './service-selector/index.jsx'
import UpArrowImage from '../../assets/upArrow.png'

import "./styles.css"

export function Input() {
  return (
    <view>
      <view className='bottomMenu'>
        <view className='inputRow'>
          <view className='inputBox'>
            <text className='tempInput'>Ask a question...</text>
          </view>
          <view className='sendMessage' >
            <image src={UpArrowImage} className='sendArrow'></image>
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
