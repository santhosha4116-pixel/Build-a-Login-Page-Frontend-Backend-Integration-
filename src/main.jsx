import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { Route,Router,BrowserRouter, Routes } from 'react-router-dom'
import './index.css'
import Loginpage from './Loginpage.jsx'
import Landing from './landingpage.jsx'
createRoot(document.getElementById('root')).render(
  <App></App>
)
