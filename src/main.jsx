import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TextReadinessProvider } from './components/SkeletonText.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TextReadinessProvider>
      <App />
    </TextReadinessProvider>
  </StrictMode>,
)
