import React from 'react'
import ReactDOM from 'react-dom/client' // Only need this, not 'react-dom'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CoinContextProvider from './context/CoinContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CoinContextProvider>
        <App />
      </CoinContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
