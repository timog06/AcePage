import { useEffect, useState } from 'react'

function About() {
  const [users, setUsers] = useState({
    admins: [],
    mods: [],
    developers: []
  })

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await fetch('/users.json')
        const userData = await response.json()
        setUsers(userData)
      } catch (error) {
        console.error('Error loading user data:', error)
      }
    }

    loadUsers()
  }, [])

  const StaffMember = ({ member }) => (
    <div className="staff-member">
      <div 
        className="member-avatar" 
        style={{ backgroundImage: member.avatar ? `url('${member.avatar}')` : 'none' }}
      />
      <div className="member-info">
        <span className="member-name">{member.username}</span>
        <span className="member-role">{member.role}</span>
      </div>
    </div>
  )

  return (
    <main className="about-container">
      <section className="about-section">
        <h2>About Ace</h2>
        <div className="about-content">
          <p style={{ fontFamily: 'Star Wars', fontWeight: 'bold' }}>
            Ace Clan is a dedicated community of Star Wars: Galactic Contention enthusiasts. 
            We strive to create an immersive and enjoyable gaming experience for all our members, 
            fostering teamwork and strategic gameplay in a galaxy far, far away.
          </p>
          <div className="notice-section">
            <p style={{ fontFamily: 'Consolas', fontStyle: 'italic' }}>
              The current display of stats is only temporary to test the style.
            </p>
          </div>
        </div>
      </section>

      <section className="teams-grid">
        <div className="team-section">
          <h3>Admins</h3>
          <div className="team-members">
            {users.admins.map(admin => (
              <StaffMember key={admin.id} member={admin} />
            ))}
          </div>
        </div>

        <div className="team-section">
          <h3>Mods</h3>
          <div className="team-members">
            {users.mods.map(mod => (
              <StaffMember key={mod.id} member={mod} />
            ))}
          </div>
        </div>

        <div className="team-section">
          <h3>Developers</h3>
          <div className="team-members">
            {users.developers.map(dev => (
              <StaffMember key={dev.id} member={dev} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
