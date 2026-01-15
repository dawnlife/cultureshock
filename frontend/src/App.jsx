import React from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ExperienceDetail from './pages/ExperienceDetail'
import './App.css'

function Header() {
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header className="app-header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>K-체험스쿨</h1>
          </Link>
          <nav className="nav">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              전체
            </Link>
            <Link to="/domestic" className={`nav-link ${isActive('/domestic') ? 'active' : ''}`}>
              국내
            </Link>
            <Link to="/busking" className={`nav-link ${isActive('/busking') ? 'active' : ''}`}>
              국외
            </Link>
          </nav>
          <button className="login-btn">로그인</button>
        </div>
      </div>
    </header>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/domestic" element={<MainPage domestic />} />
          <Route path="/busking" element={<MainPage global />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
        </Routes>
        <div className="star-decoration">
          <div className="star star-1">✦</div>
          <div className="star star-2">✦</div>
          <div className="star star-3">✦</div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
