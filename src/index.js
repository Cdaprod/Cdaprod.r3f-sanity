import { createRoot } from 'react-dom'
import React from 'react'
import { CdaBadge } from './CdaBadge'  // Importing your custom badge
import './styles.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <CdaBadge />  // Using your custom badge
  </>
)
