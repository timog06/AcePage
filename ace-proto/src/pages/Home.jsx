import Card from '../components/Card'

const Home = () => {
  return (
    <>
      <div className="hero-section">
        <div className="logo-container">
          <img src="/logo.png" alt="ACE Studios Logo" className="logo" />
        </div>
        <h1>Welcome To Clan Ace</h1>
        <p>A Gaming Community with a love for flying.</p>
      </div>
      
      <div className="cards-container">
        <Card
          icon="/boba.png"
          title="Player Statistics"
          description="Player and global statistics with advanced data analytics."
          link="/stats"
        />
        <Card
          icon="/death_star.png"
          title="Discord"
          description="Playing games & building projects. Join our Community!"
          link="https://discord.gg/WFUhgbtrwB"
          isDiscord={true}
        />
        <Card
          icon="/c3po.png"
          title="Server Rules"
          description="Code of conduct when playing on ACE Servers"
          link="/rules"
        />
      </div>
    </>
  )
}

export default Home
