import { Link, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const HeaderContent = () => (
    <div className="header-content">
      <div className="logo-container" onClick={() => window.location.href='/'}>
        <div className="logo"></div>
        <div className="clan-info">
          <div className="clan-name">Ace Clan</div>
          <div className="clan-subtitle">Galactic Contention Mod Clan</div>
        </div>
      </div>
      <button 
        className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <MenuIcon />
      </button>
      <nav className={isMenuOpen ? 'nav-open' : ''}>
        <Link to="/about">About Us</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/rules">Rules</Link>
      </nav>
    </div>
  )

  if (isHome) {
    return (
      <header className="home-header">
        <HeaderContent />
        <section className="hero">
          <div className="hero-content">
            <div className="hero-left">
              <h1>Access your own Squad Stats collected on our server and take control of your journey!</h1>
              <div className="search-container">
                <div className="search-input-wrapper">
                  <input type="text" id="steamId-input" placeholder="Input SteamId" />
                  <button className="button" onClick={() => window.location.href='/stats'}>
                    Deployment Record
                  </button>
                </div>
              </div>
            </div>
            <div className="hero-right">
              <h2>Welcome to the galaxy's finest clan!</h2>
              <p>Join us on our journey through the stars and the battles that await.</p>
              <button 
                className="button" 
                onClick={() => window.open('https://discord.gg/WFUhgbtrwB', '_blank')}
              >
                Join the Fight!
              </button>
            </div>
          </div>
        </section>
      </header>
    )
  }

  return (
    <header>
      <HeaderContent />
    </header>
  )
}

export default Header
