function Home() {
  return (
    <main>
      <div className="three-column">
        <div className="column" id="custom-widget">
          <h3>Custom Widget</h3>
          <img 
            src="https://media1.tenor.com/m/n1AjQl9rowgAAAAd/need-for-seed-seed.gif" 
            alt="Temporary GIF" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="column" id="about-column" onClick={() => window.location.href='/about'}>
          <h3>About Us</h3>
          <p style={{ fontFamily: 'Consolas' }}>
            Ace Clan is a dedicated community of Star Wars: Galactic Contention enthusiasts. 
            We strive to create an immersive and enjoyable gaming experience for all our members, 
            fostering teamwork and strategic gameplay in a galaxy far, far away.
          </p>
        </div>
        <div className="column" id="rules-column" onClick={() => window.location.href='/rules'}>
          <h3>Server Rules</h3>
          <div className="rules-content discord-rules" id="discord-rules-preview">
            <h4>Discord Rules</h4>
            <ul></ul>
          </div>
          <div className="rules-content squad-rules" id="squad-rules-preview" style={{display: 'none'}}>
            <h4>Squad Rules</h4>
            <ul></ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
