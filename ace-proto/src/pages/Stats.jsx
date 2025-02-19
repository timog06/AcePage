import { Link } from 'react-router-dom';
import StatsSection from '../components/StatsSection';
import PersonalStats from '../components/PersonalStats';

const Statistics = () => {
  return (
    <main className="main-content">
      <div className="clan-section">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img 
              src="/AcePage/logo.png" 
              alt="ACE Studios Logo" 
              className="logo"
            />
          </Link>
        </div>
        <h1>Player Statistics</h1>
        <p>Track your performance and compare with others.</p>
        <Link to="/comparison" className="compare-button">Compare Players</Link>
      </div>

      <div className="stats-container">
        <PersonalStats />

        <div className="stats-row">
          <StatsSection
            title="Global Rankings"
            jsonPath="/global_stats.json"
          />
          <StatsSection
            title="Monthly Stats"
            jsonPath="/monthly_stats.json"
          />
          <StatsSection
            title="Daily Stats"
            jsonPath="/daily_stats.json"
          />
        </div>
      </div>
    </main>
  );
};

export default Statistics;
