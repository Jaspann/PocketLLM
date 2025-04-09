import { root } from '@lynx-js/react'

import { App } from './App.js'
import './tailwind.css'

root.render(<App />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
