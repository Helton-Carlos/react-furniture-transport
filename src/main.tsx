import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import App from './App.tsx'
import './assets/css/index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
