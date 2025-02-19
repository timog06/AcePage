import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

const About = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch('/AcePage/users.json')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error loading users:', error));
  }, []);

  return (
    <main className="main-content">
      <div className="clan-section">
        <div className="logo-container">
          <Link to="/">
            <img src="/AcePage/logo.png" alt="ACE Studios Logo" className="logo" />
          </Link>
        </div>
        <h1>About Us</h1>
        <p>Learn more about the ACE community.</p>
      </div>

      <div className="about-container">
        <div className="about-section">
          <h2>The ACE Community</h2>
          <p>
            ACE Studios is a cool team!
          </p>
        </div>

        <div className="staff-section">
          <h2>Our Team</h2>
          <div className="staff-grid">
            <div className="staff-column">
              <h3>Administration</h3>
              <div className="staff-list">
                {users?.admins?.map(admin => (
                  <div key={admin.id} className="staff-card">
                    <div className="staff-card-content">
                      <div className="profile-picture">
                        {admin.avatar ? (
                          <img
                            src={admin.avatar}
                            alt={admin.username}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                        ) : (
                          <PersonIcon className="person-icon" />
                        )}
                      </div>
                      <div className="staff-info">
                        <span className="staff-name">{admin.username}</span>
                        <span className="staff-role">{admin.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="staff-column">
              <h3>Moderation</h3>
              <div className="staff-list">
                {users?.mods?.map(mod => (
                  <div key={mod.id} className="staff-card">
                    <div className="staff-card-content">
                      <div className="profile-picture">
                        {mod.avatar ? (
                          <img
                            src={mod.avatar}
                            alt={mod.username}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                        ) : (
                          <PersonIcon className="person-icon" />
                        )}
                      </div>
                      <div className="staff-info">
                        <span className="staff-name">{mod.username}</span>
                        <span className="staff-role">{mod.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="staff-column">
              <h3>Development</h3>
              <div className="staff-list">
                {users?.developers?.map(dev => (
                  <div key={dev.id} className="staff-card">
                    <div className="staff-card-content">
                      <div className="profile-picture">
                        {dev.avatar ? (
                          <img
                            src={dev.avatar}
                            alt={dev.username}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                        ) : (
                          <PersonIcon className="person-icon" />
                        )}
                      </div>
                      <div className="staff-info">
                        <span className="staff-name">{dev.username}</span>
                        <span className="staff-role">{dev.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
