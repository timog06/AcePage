import { Link } from 'react-router-dom'
import DiscordIcon from './DiscordIcon'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span>ACE</span>studios.
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="stats">Server Statistics</Link>
        <Link to="rules">Rules</Link>
        <Link to="about">About</Link>
        <a href="https://discord.gg/WFUhgbtrwB" target="_blank" rel="noopener noreferrer">
          <DiscordIcon className="discord-icon" sx={{ color: 'white' }} />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
