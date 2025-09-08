import '@/assets/iconfont/iconfont.css'
import '@/assets/styles/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import { Button } from './components/button'
// import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Button loading />
  </StrictMode>
)
