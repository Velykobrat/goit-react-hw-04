import React from 'react'

import App from './components/App/App'
import './index.css'
import { createRoot } from 'react-dom/client'; // оновлений імпорт

createRoot(document.getElementById('root')).render( // оновлення використання
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
