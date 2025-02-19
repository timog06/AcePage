import { useState } from 'react';
import SearchBar from './SearchBar';
import PersonIcon from '@mui/icons-material/Person';
import { addToSearchHistory } from '../utils/searchHistory';

// Player statistics component with search and data display
const PersonalStats = () => {
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (steamId) => {
    setLoading(true);
    setError(null);

    try {
      let found = false;
      for (let i = 1; i <= 3; i++) {
        try {
          const response = await fetch(`/AcePage/personal_stats_${i}.json`);
          const data = await response.json();
          
          if (steamId === data.steamId) {
            setPlayerData(data);
            const currentHistory = JSON.parse(localStorage.getItem('steamIdHistory') || '[]');
            addToSearchHistory(steamId, currentHistory);
            found = true;
            break;
          }
        } catch (err) {
          console.error(`Error fetching personal_stats_${i}.json:`, err);
        }
      }

      if (!found) {
        setError('Player not found');
        setPlayerData(null);
      }
    } catch (err) {
      setError('Failed to fetch player data');
      setPlayerData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="personal-stats-container">
      <SearchBar onSearch={handleSearch} />

      {error && <p className="error-message">{error}</p>}

      {playerData && (
        <div className="stats-section player-stats">
          <div className="player-header">
            <div className="profile-picture">
              {playerData.profilePicture ? (
                <>
                  <img
                    src={playerData.profilePicture}
                    alt={playerData.username}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <PersonIcon
                    className="person-icon"
                    style={{ display: playerData.profilePicture ? 'none' : 'block' }}
                  />
                </>
              ) : (
                <PersonIcon className="person-icon" />
              )}
            </div>
            <h2>Player Statistics - {playerData.username}</h2>
          </div>

          <div className="stats-grid">
            <div className="stats-category">
              <h3>Offensive Stats</h3>
              <div className="stat-item">
                <span>Kills:</span> <span>{playerData.offensive.kills}</span>
              </div>
              <div className="stat-item">
                <span>Kills Per Game:</span> <span>{playerData.offensive.killsPerGame}</span>
              </div>
              <div className="stat-item">
                <span>Deaths:</span> <span>{playerData.offensive.deaths}</span>
              </div>
              <div className="stat-item">
                <span>Deaths Per Game:</span> <span>{playerData.offensive.deathsPerGame}</span>
              </div>
              <div className="stat-item">
                <span>K/D Ratio:</span> <span>{playerData.offensive.kd}</span>
              </div>
            </div>

            <div className="stats-category">
              <h3>Defensive Stats</h3>
              <div className="stat-item">
                <span>Revives:</span> <span>{playerData.defensive.revives}</span>
              </div>
              <div className="stat-item">
                <span>Revives Per Game:</span> <span>{playerData.defensive.revivesPerGame}</span>
              </div>
              <div className="stat-item">
                <span>Times Revived:</span> <span>{playerData.defensive.timesRevived}</span>
              </div>
            </div>

            <div className="stats-category">
              <h3>Best Performance</h3>
              <div className="stat-item">
                <span>Best Game Kills:</span> <span>{playerData.bestPerformance.bestGame.kills}</span>
              </div>
              <div className="stat-item">
                <span>Best Game Map:</span> <span>{playerData.bestPerformance.bestGame.map}</span>
              </div>
              <div className="stat-item">
                <span>Most Used Weapon:</span> <span>{playerData.bestPerformance.mostUsedWeapon.weapon}</span>
              </div>
              <div className="stat-item">
                <span>Weapon Kills:</span> <span>{playerData.bestPerformance.mostUsedWeapon.kills}</span>
              </div>
            </div>

            <div className="stats-category">
              <h3>Player Interactions</h3>
              <div className="stat-item">
                <span>Most Killed:</span> <span>{playerData.playerInteractions.mostKilled.player} ({playerData.playerInteractions.mostKilled.kills})</span>
              </div>
              <div className="stat-item">
                <span>Most Killed By:</span> <span>{playerData.playerInteractions.mostKilledBy.player} ({playerData.playerInteractions.mostKilledBy.deaths})</span>
              </div>
              <div className="stat-item">
                <span>Most Meleed:</span> <span>{playerData.playerInteractions.mostMeleed.player} ({playerData.playerInteractions.mostMeleed.kills})</span>
              </div>
              <div className="stat-item">
                <span>Most Meleed By:</span> <span>{playerData.playerInteractions.mostMeleedBy.player} ({playerData.playerInteractions.mostMeleedBy.deaths})</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalStats;
