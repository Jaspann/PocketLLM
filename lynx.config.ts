import { defineConfig } from '@lynx-js/rspeedy'

import { pluginQRCode } from '@lynx-js/qrcode-rsbuild-plugin'
import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin'
// import { pluginTailwindCSS } from 'rsbuild-plugin-tailwindcss'

// The Tailwind plugin currently breaks hot-reloading.
// Everything seems to work without it for now.

export default defineConfig({
  plugins: [
    pluginQRCode({
      schema(url) {
        // We use `?fullscreen=true` to open the page in LynxExplorer in full screen mode
        return `${url}?fullscreen=true`
      },
    }),
    pluginReactLynx(),
    // pluginTailwindCSS(),
  ],
})
