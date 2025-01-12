// React Imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// integrate bs and bs-icons
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// project css
import './index.css'

// components
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
