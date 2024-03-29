import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ChartProvider } from './components/context/chart_context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <BrowserRouter>
      <ChartProvider>
        <App />
      </ChartProvider>
    </BrowserRouter>
  </>
)
