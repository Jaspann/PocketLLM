import { useCallback, useState } from '@lynx-js/react'
import backArrow from '../assets/backArrow.png'

interface SettingsProps {
  apiKeys: {
    openAi: string
    anthropic: string
    gemini: string
    deepSeek: string
  }
  onUpdateApiKeys: (keys: {
    openAi: string
    anthropic: string
    gemini: string
    deepSeek: string
  }) => void
  onBack: () => void
}

export function Settings({ apiKeys, onUpdateApiKeys, onBack }: SettingsProps) {
  const [openAiApiKey, setOpenAiApiKey] = useState(apiKeys.openAi)
  const [anthropicApiKey, setAnthropicApiKey] = useState(apiKeys.anthropic)
  const [geminiApiKey, setGeminiApiKey] = useState(apiKeys.gemini)
  const [deepSeekApiKey, setDeepSeekApiKey] = useState(apiKeys.deepSeek)

  const onTapBack = useCallback(() => {
    onUpdateApiKeys({
      openAi: openAiApiKey,
      anthropic: anthropicApiKey,
      gemini: geminiApiKey,
      deepSeek: deepSeekApiKey,
    })
    onBack() // Call onBack instead of using navigation
  }, [
    openAiApiKey,
    anthropicApiKey,
    geminiApiKey,
    deepSeekApiKey,
    onUpdateApiKeys,
    onBack,
  ])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOpenAiInputChange = (e: any) => {
    const currentValue = e.detail.value.trim()
    setOpenAiApiKey(currentValue)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAnthropicInputChange = (e: any) => {
    const currentValue = e.detail.value.trim()
    setAnthropicApiKey(currentValue)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleGeminiInputChange = (e: any) => {
    const currentValue = e.detail.value.trim()
    setGeminiApiKey(currentValue)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDeepSeekInputChange = (e: any) => {
    const currentValue = e.detail.value.trim()
    setDeepSeekApiKey(currentValue)
  }

  return (
    <view>
      <view className="fixed bg-white w-full h-24 flex flex-row items-center px-2 pt-12">
        <view bindtap={onTapBack}>
          <image src={backArrow} className="w-8 h-8" />
        </view>
        <text className="flex-1 text-center text-black">
          Pocket LLM Settings
        </text>
      </view>
      <view className="m-5 mt-28 w-[90%]">
        <text>OpenAI API Key:</text>
        <view className="w-full bg-gray-200 p-2.5 my-2.5 rounded-lg">
          <input
            // @ts-expect-error Lynx has a different input function then what is expected.
            bindinput={handleOpenAiInputChange}
            type="text"
            value={openAiApiKey}
            placeholder="Enter API Key"
            className="w-full h-5"
          />
        </view>
        <text>Anthropic API Key:</text>
        <view className="w-full bg-gray-200 p-2.5 my-2.5 rounded-lg">
          <input
            // @ts-expect-error Lynx has a different input function then what is expected.
            bindinput={handleAnthropicInputChange}
            type="text"
            value={anthropicApiKey}
            placeholder="Enter API Key"
            className="w-full h-5"
          />
        </view>
        <text>Gemini API Key:</text>
        <view className="w-full bg-gray-200 p-2.5 my-2.5 rounded-lg">
          <input
            // @ts-expect-error Lynx has a different input function then what is expected.
            bindinput={handleGeminiInputChange}
            type="text"
            value={geminiApiKey}
            placeholder="Enter API Key"
            className="w-full h-5"
          />
        </view>
        <text>DeepSeek API Key:</text>
        <view className="w-full bg-gray-200 p-2.5 my-2.5 rounded-lg">
          <input
            // @ts-expect-error Lynx has a different input function then what is expected.
            bindinput={handleDeepSeekInputChange}
            type="text"
            value={deepSeekApiKey}
            placeholder="Enter API Key"
            className="w-full h-5"
          />
        </view>
      </view>
    </view>
  )
}
