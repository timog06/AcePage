import { useEffect, useState } from 'react'

function Stats() {
  const [personalStats, setPersonalStats] = useState(null)
  const [globalStats, setGlobalStats] = useState(null)
  const [monthlyStats, setMonthlyStats] = useState(null)
  const [dailyStats, setDailyStats] = useState(null)
  const [activeSection, setActiveSection] = useState('global')
  const [searchHistory, setSearchHistory] = useState([])
  const [showHistory, setShowHistory] = useState(false)
  const [steamId, setSteamId] = useState('')

  useEffect(() => {
    // Load stats data
    const loadStats = async () => {
      try {
        const [globalRes, monthlyRes, dailyRes] = await Promise.all([
          fetch('/global_stats.json'),
          fetch('/monthly_stats.json'),
          fetch('/daily_stats.json')
        ])

        setGlobalStats(await globalRes.json())
        setMonthlyStats(await monthlyRes.json())
        setDailyStats(await dailyRes.json())
      } catch (error) {
        console.error('Error loading stats:', error)
      }
    }

    // Load search history from localStorage
    const history = JSON.parse(localStorage.getItem('searchHistory') || '[]')
    setSearchHistory(history)

    // Check for pending stats request
    const pendingRequest = localStorage.getItem('pendingStatsRequest')
    if (pendingRequest) {
      setSteamId(pendingRequest)
      handleSearch(pendingRequest)
      localStorage.removeItem('pendingStatsRequest')
    }

    loadStats()
  }, [])

  const handleSearch = async (id) => {
    try {
      const response = await fetch('/personal_stats.json')
      const data = await response.json()
      
      if (data.steamId === id) {
        setPersonalStats(data)
        
        // Update search history
        const history = JSON.parse(localStorage.getItem('searchHistory') || '[]')
        const newHistory = [id, ...history.filter(h => h !== id)].slice(0, 5)
        localStorage.setItem('searchHistory', JSON.stringify(newHistory))
        setSearchHistory(newHistory)
      } else {
        setPersonalStats({ error: 'No deployment history found for this SteamID' })
      }
    } catch (error) {
      console.error('Error loading personal stats:', error)
      setPersonalStats({ error: 'Error loading stats' })
    }
  }

  const renderStatsBlock = (title, stats) => (
    <div className="stats-block">
      <h3>{title}</h3>
      {Object.entries(stats).map(([key, value]) => (
        <p key={key}>{key}: {value}</p>
      ))}
    </div>
  )

  const renderLeaderboard = (title, data) => (
    <div className="stats-block">
      <h3>{title}</h3>
      {data.map((entry, index) => (
        <p key={index}>
          {entry.rank}. {entry.player}: {Object.values(entry).find(val => typeof val === 'number')}
        </p>
      ))}
    </div>
  )

  return (
    <main className="stats-container">
      <div className="search-notice-wrapper">
        <div className="search-section">
          <div className="search-container">
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Input SteamId"
                className="stats-search"
                value={steamId}
                onChange={(e) => setSteamId(e.target.value)}
                onFocus={() => setShowHistory(true)}
                onBlur={() => setTimeout(() => setShowHistory(false), 200)}
              />
              {showHistory && searchHistory.length > 0 && (
                <div className="search-history">
                  {searchHistory.map((id, index) => (
                    <div
                      key={index}
                      className="search-history-item"
                      onClick={() => {
                        setSteamId(id)
                        handleSearch(id)
                      }}
                    >
                      {id}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button className="button" onClick={() => handleSearch(steamId)}>
              Deployment Record
            </button>
          </div>
        </div>
        <div className="notice-section">
          <p>The current display of stats is only temporary to test the style.</p>
        </div>
      </div>

      <div className="stats-grid">
        {personalStats && (
          <div className="personal-stats">
            <h2>Personal Stats for {personalStats.username}</h2>
            <div className="stats-content">
              {personalStats.error ? (
                <p className="error-message">{personalStats.error}</p>
              ) : (
                <div className="stats-grid-content">
                  {renderStatsBlock('Offensive', personalStats.offensive)}
                  {renderStatsBlock('Defensive', personalStats.defensive)}
                  {renderStatsBlock('Negative', personalStats.negative)}
                  {renderStatsBlock('Best Performance', {
                    'Best Game': `${personalStats.bestPerformance.bestGame.kills} kills on ${personalStats.bestPerformance.bestGame.map}`,
                    'Most Used Weapon': `${personalStats.bestPerformance.mostUsedWeapon.weapon} (${personalStats.bestPerformance.mostUsedWeapon.kills} kills)`
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        <div className="global-stats">
          {globalStats && monthlyStats && dailyStats && (
            <>
              <div 
                className={`stats-section global-section ${activeSection === 'global' ? 'active' : ''}`}
                onClick={() => setActiveSection('global')}
              >
                <div className="stats-header">
                  <h2>Global Stats</h2>
                  <h3>Since {globalStats.startDate}</h3>
                </div>
                <div className="stats-content">
                  <div className="stats-grid-content">
                    {renderLeaderboard('Top Kills', globalStats.topKills)}
                    {renderLeaderboard('Top Deaths', globalStats.topDeaths)}
                    {renderLeaderboard('Top Revives', globalStats.topRevives)}
                    {renderLeaderboard('Top Team Kills', globalStats.topTeamKills)}
                  </div>
                </div>
              </div>

              <div 
                className={`stats-section monthly-section ${activeSection === 'monthly' ? 'active' : ''}`}
                onClick={() => setActiveSection('monthly')}
              >
                <div className="stats-header">
                  <h2>Monthly Stats</h2>
                  <h3>{monthlyStats.period}</h3>
                </div>
                <div className="stats-content">
                  <div className="stats-grid-content">
                    {renderLeaderboard('Top Kills', monthlyStats.topKills)}
                    {renderLeaderboard('Top Deaths', monthlyStats.topDeaths)}
                    {renderLeaderboard('Top Revives', monthlyStats.topRevives)}
                    {renderLeaderboard('Top Team Kills', monthlyStats.topTeamKills)}
                  </div>
                </div>
              </div>

              <div 
                className={`stats-section daily-section ${activeSection === 'daily' ? 'active' : ''}`}
                onClick={() => setActiveSection('daily')}
              >
                <div className="stats-header">
                  <h2>Daily Stats</h2>
                  <h3>{dailyStats.period}</h3>
                </div>
                <div className="stats-content">
                  <div className="stats-grid-content">
                    {renderLeaderboard('Top Kills', dailyStats.topKills)}
                    {renderLeaderboard('Top Deaths', dailyStats.topDeaths)}
                    {renderLeaderboard('Top Revives', dailyStats.topRevives)}
                    {renderLeaderboard('Top Team Kills', dailyStats.topTeamKills)}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  )
}

export default Stats
