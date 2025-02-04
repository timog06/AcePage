import DiscordIcon from './DiscordIcon'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Links</h4>
            <div>
              <a href="/about">About Us</a>
              <a href="/stats">Stats</a>
              <a href="/rules">Rules</a>
            </div>
          </div>
          <div className="footer-section">
            <p>Copyright 2025 Ace Clan. All Rights Reserved</p>
          </div>
          <div className="footer-section">
            <h4>Socials</h4>
            <div>
              <a href="https://discord.gg/WFUhgbtrwB" target="_blank" rel="noopener noreferrer">
                <DiscordIcon sx={{ fontSize: 24 }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
