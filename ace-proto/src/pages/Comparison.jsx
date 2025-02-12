import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import PersonIcon from "@mui/icons-material/Person";
import toast from "react-hot-toast";

const Comparison = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSearch, setShowSearch] = useState(true);

  const handleSearch = async (steamId) => {
    if (players.length >= 10) {
      toast.error("You can only compare up to 10 players at once");
      return;
    }

    if (players.some(player => player.steamId === steamId)) {
      toast.error("This player is already in the comparison");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      let found = false;
      for (let i = 1; i <= 3; i++) {
        try {
          const response = await fetch(`/AcePage/personal_stats_${i}.json`);
          const data = await response.json();
          if (steamId === data.steamId) {
            setPlayers((prev) => [...prev, data]);
            setShowSearch(false);
            found = true;
            break;
          }
        } catch (err) {
          console.error(`Error fetching personal_stats_${i}.json:`, err);
        }
      }
      if (!found) {
        setError("Player not found");
      }
    } catch (err) {
      setError("Failed to fetch player data");
    }
    setLoading(false);
  };

  const addPlayer = () => {
    setShowSearch(true);
  };

  const removePlayer = (steamId) => {
    setPlayers((prev) => prev.filter((player) => player.steamId !== steamId));
  };

  return (
    <main className="main-content">
      <div className="hero-section">
        <div className="logo-container">
          <Link to="/">
            <img src="/AcePage/logo.png" alt="ACE Studios Logo" className="logo" />
          </Link>
        </div>
        <h1>Player Comparison</h1>
        <p>Compare stats between players.</p>
      </div>
      <div className="comparison-container">
        <div className="comparison-search">
          <SearchBar
            onSearch={handleSearch}
            buttonText="Add Player"
            placeholder={
              players.length === 0
                ? "Enter Steam ID to start comparison"
                : "Enter Steam ID to add player"
            }
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {loading ? (
          <p>Loading...</p>
        ) : players.length > 0 ? (
          <div className="comparison-results">
            <div className="comparison-header">
              <h3>Player Comparison</h3>
            </div>
            <div className="comparison-table">
              <div className="stat-labels">
                <div className="player-columns">
                  {players.map((player) => (
                    <div key={player.steamId} className="player-column">
                      <div className="player-info">
                        <div className="profile-picture">
                          {player.profilePicture ? (
                            <img
                              src={player.profilePicture}
                              alt={player.username}
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                              }}
                            />
                          ) : (
                            <PersonIcon className="person-icon" />
                          )}
                        </div>
                        <div className="player-name">{player.username}</div>
                        <button
                          onClick={() => removePlayer(player.steamId)}
                          className="remove-player"
                          title="Remove player"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                {players.length > 0 ? (
                  Object.entries(players[0]).map(([category, stats]) => {
                    if (
                      typeof stats === "object" &&
                      !Array.isArray(stats) &&
                      category !== "bestPerformance" &&
                      category !== "playerInteractions" &&
                      category !== "profilePicture" &&
                      category !== "username" &&
                      category !== "steamId"
                    ) {
                      return (
                        <div key={category} className="stat-category">
                          <div className="category-header">
                            {category.charAt(0).toUpperCase() + category.slice(1)} Stats
                          </div>
                          {Object.keys(stats ?? {}).map((stat) => (
                            <div key={stat} className="stat-row">
                              <div className="stat-cell">{stat}</div>
                              {players.map((player) => (
                                <div key={player.steamId} className="stat-cell">
                                  {player[category]?.[stat] ?? '-'}
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      );
                    } else if (category === "bestPerformance") {
                      return (
                        <div key={category} className="stat-category">
                          <div className="category-header">
                            Best Performance
                          </div>
                          <div className="stat-row">
                            <div className="stat-cell">Best Game Kills</div>
                            {players.map((player) => (
                              <div key={player.steamId} className="stat-cell">
                                {player.bestPerformance.bestGame.kills}
                              </div>
                            ))}
                          </div>
                          <div className="stat-row">
                            <div className="stat-cell">Best Game Map</div>
                            {players.map((player) => (
                              <div key={player.steamId} className="stat-cell">
                                {player.bestPerformance.bestGame.map}
                              </div>
                            ))}
                          </div>
                          <div className="stat-row">
                            <div className="stat-cell">Most Used Weapon</div>
                            {players.map((player) => (
                              <div key={player.steamId} className="stat-cell">
                                {player.bestPerformance.mostUsedWeapon.weapon}
                              </div>
                            ))}
                          </div>
                          <div className="stat-row">
                            <div className="stat-cell">Weapon Kills</div>
                            {players.map((player) => (
                              <div key={player.steamId} className="stat-cell">
                                {player.bestPerformance.mostUsedWeapon.kills}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    } else if (category === "playerInteractions") {
                      return (
                        <div key={category} className="stat-category">
                          <div className="category-header">
                            Player Interactions
                          </div>
                          <div className="stat-row">
                            <div className="stat-cell">Most Killed</div>
                            {players.map((player) => (
                              <div key={player.steamId} className="stat-cell">
                                {`${player.playerInteractions.mostKilled.player} (${player.playerInteractions.mostKilled.kills})`}
                              </div>
                            ))}
                          </div>
                          <div className="stat-row">
                            <div className="stat-cell">Most Killed By</div>
                            {players.map((player) => (
                              <div key={player.steamId} className="stat-cell">
                                {`${player.playerInteractions.mostKilledBy.player} (${player.playerInteractions.mostKilledBy.deaths})`}
                              </div>
                            ))}
                          </div>
                          <div className="stat-row">
                            <div className="stat-cell">Most Meleed</div>
                            {players.map((player) => (
                              <div key={player.steamId} className="stat-cell">
                                {`${player.playerInteractions.mostMeleed.player} (${player.playerInteractions.mostMeleed.kills})`}
                              </div>
                            ))}
                          </div>
                          <div className="stat-row">
                            <div className="stat-cell">Most Meleed By</div>
                            {players.map((player) => (
                              <div key={player.steamId} className="stat-cell">
                                {`${player.playerInteractions.mostMeleedBy.player} (${player.playerInteractions.mostMeleedBy.deaths})`}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })
                ) : (
                  <div className="stat-category">
                    <div className="category-header">No players selected</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Comparison;
