import { Message } from './messages/Message.jsx'

import './Chat.css'

type ChatWindowProps = {
  messages: Message[]
}

export function Chat({ messages }: ChatWindowProps) {
  return (
    <view className="messageView">
      <scroll-view scroll-orientation="vertical" className="w-full h-full p-2">
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
