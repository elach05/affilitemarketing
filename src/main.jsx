import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// دالة لإعادة تحميل الصفحة عند تغيير حجم الشاشة
function handleResize() {
  if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
    window.location.reload();
  }
}

// إضافة مستمع لحدث تغيير حجم الشاشة
window.addEventListener('resize', handleResize);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
