import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Login from './pages/Login.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
