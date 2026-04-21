import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerSW } from 'virtual:pwa-register' // ضيف هذا السطر

registerSW({ immediate: true }) // وهذا السطر هماتين

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)