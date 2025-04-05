import { root } from '@lynx-js/react'
import { MemoryRouter, Routes, Route } from 'react-router';

import { App } from './App.js'
import { Settings } from './components/settings/index.jsx'

root.render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </MemoryRouter>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
