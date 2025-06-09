import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NewsProvider } from './providers/news/NewsContext.jsx'
import { ThemeProvider } from './providers/theme/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewsProvider>
      <ThemeProvider>

    <App />   
      </ThemeProvider>
    </NewsProvider>
  </StrictMode>,
)
