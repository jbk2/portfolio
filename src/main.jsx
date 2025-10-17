import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/stylesheets/index.css'
import App from './App.jsx'
import { initSystemThemeSync, storeSessionThemePreference } from './utils/theme.js'

storeSessionThemePreference('dark');
initSystemThemeSync();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)