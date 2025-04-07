import { Message } from './message/index.jsx'

import './styles.css'

type ChatWindowProps = {
  messages: Message[]
}

export function Chat({ messages }: ChatWindowProps) {
  return (
    <view className="messageView">
      <scroll-view scroll-orientation="vertical" className="messageScroll">
        {messages.map((message, index) => (
          <Message
            key={index}
            service={message.service}
            role={message.role}
            message={message.content}
          />
        ))}
      </scroll-view>
    </view>
  )
}
