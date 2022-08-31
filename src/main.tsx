import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChartProvider } from './components/context/chart_context'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChartProvider>
    <App />
    </ChartProvider>
  
  </React.StrictMode>
)
