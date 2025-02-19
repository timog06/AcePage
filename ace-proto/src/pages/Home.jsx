import Card from '../components/Card'

// Landing page with feature cards and clan section
const Home = () => {
  return (
    <>
      <div className="clan-section">
        <div className="logo-container">
          <img src="/AcePage/logo.png" alt="ACE Studios Logo" className="logo" />
        </div>
        <h1>Welcome To Clan Ace</h1>
        <p>A Gaming Community with a love for flying.</p>
      </div>
      
      <div className="cards-container">
        <Card
          icon="/AcePage/boba.png"
          title="Player Statistics"
          description="Player and global statistics with advanced data analytics."
          link="stats"
        />
        <Card
          icon="/AcePage/death_star.png"
          title="Discord"
          description="Playing games & building projects. Join our Community!"
          link="https://discord.gg/WFUhgbtrwB"
        />
        <Card
          icon="/AcePage/c3po.png"
          title="Server Rules"
          description="Code of conduct when playing on ACE Servers"
          link="rules"
        />
      </div>
    </>
  )
}

export default Home
