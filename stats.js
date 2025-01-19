// Function to format stats content based on section type
function formatStats(data, type) {
    switch(type) {
        case 'personal':
            return `
                <div class="stats-grid-content">
                    <div class="stats-block">
                        <h3>Offensive</h3>
                        <p>Kills: ${data.offensive.kills} (${data.offensive.killsPerGame}/game)</p>
                        <p>Deaths: ${data.offensive.deaths} (${data.offensive.deathsPerGame}/game)</p>
                        <p>K/D: ${data.offensive.kd}</p>
                    </div>
                    <div class="stats-block">
                        <h3>Defensive</h3>
                        <p>Revives: ${data.defensive.revives} (${data.defensive.revivesPerGame}/game)</p>
                        <p>Times Revived: ${data.defensive.timesRevived}</p>
                    </div>
                    <div class="stats-block">
                        <h3>Negative</h3>
                        <p>Team Kills: ${data.negative.teamKills} (${data.negative.teamKillsPerGame}/game)</p>
                    </div>
                    <div class="stats-block">
                        <h3>Best Performance</h3>
                        <p>Best Game: ${data.bestPerformance.bestGame.kills} kills on ${data.bestPerformance.bestGame.map}</p>
                        <p>Most Used Weapon: ${data.bestPerformance.mostUsedWeapon.kills} kills with ${data.bestPerformance.mostUsedWeapon.weapon}</p>
                    </div>
                    <div class="stats-block">
                        <h3>Match Statistics</h3>
                        <p>Matches Played: ${data.matchStats.matchesPlayed}</p>
                        <p>Server Kills: ${data.matchStats.serverKills}</p>
                        <p>Server Revives: ${data.matchStats.serverRevives}</p>
                        <p>Server Matches: ${data.matchStats.serverMatches}</p>
                    </div>
                    <div class="stats-block">
                        <h3>Player Interactions</h3>
                        <p>Most Killed: ${data.playerInteractions.mostKilled.player} (${data.playerInteractions.mostKilled.kills} kills)</p>
                        <p>Most Killed By: ${data.playerInteractions.mostKilledBy.player} (${data.playerInteractions.mostKilledBy.deaths} deaths)</p>
                        <p>Most Team Killed: ${data.playerInteractions.mostTeamKilled.player} (${data.playerInteractions.mostTeamKilled.kills} kills)</p>
                        <p>Most Team Killed By: ${data.playerInteractions.mostTeamKilledBy.player} (${data.playerInteractions.mostTeamKilledBy.deaths} deaths)</p>
                        <p>Most Meleed: ${data.playerInteractions.mostMeleed.player} (${data.playerInteractions.mostMeleed.kills} kills)</p>
                        <p>Most Meleed By: ${data.playerInteractions.mostMeleedBy.player} (${data.playerInteractions.mostMeleedBy.deaths} deaths)</p>
                    </div>
                </div>
            `;
        case 'global':
            return `
                <div class="stats-grid-content">
                    <div class="stats-block">
                        <h3>Top Kills</h3>
                        ${data.topKills.map(player => 
                            `<p>#${player.rank} ${player.player}: ${player.kills} kills</p>`
                        ).join('')}
                    </div>
                    <div class="stats-block">
                        <h3>Top Deaths</h3>
                        ${data.topDeaths.map(player => 
                            `<p>#${player.rank} ${player.player}: ${player.deaths} deaths</p>`
                        ).join('')}
                    </div>
                    <div class="stats-block">
                        <h3>Top Revives</h3>
                        ${data.topRevives.map(player => 
                            `<p>#${player.rank} ${player.player}: ${player.revives} revives</p>`
                        ).join('')}
                    </div>
                    <div class="stats-block">
                        <h3>Top Team Kills</h3>
                        ${data.topTeamKills.map(player => 
                            `<p>#${player.rank} ${player.player}: ${player.teamKills} TKs</p>`
                        ).join('')}
                    </div>
                </div>
            `;
        case 'monthly':
            return `
                <div class="stats-grid-content">
                    <div class="stats-block">
                        <h3>Server Stats</h3>
                        <p>Total Kills: ${data.serverStats.totalKills}</p>
                        <p>Total Team Kills: ${data.serverStats.totalTeamKills}</p>
                        <p>Total Melee Kills: ${data.serverStats.totalMeleeKills}</p>
                        <p>Total Revives: ${data.serverStats.totalRevives}</p>
                        <p>Total Matches: ${data.serverStats.totalMatches}</p>
                        <p>Unique Players: ${data.serverStats.uniquePlayers}</p>
                        <p>Linked Steam Users: ${data.serverStats.linkedSteamUsers}</p>
                    </div>
                    <div class="stats-block">
                        <h3>Top Kills</h3>
                        ${data.topKills.map(player => 
                            `<p>#${player.rank} ${player.player}: ${player.kills} kills</p>`
                        ).join('')}
                    </div>
                    <div class="stats-block">
                        <h3>Top Deaths</h3>
                        ${data.topDeaths.map(player => 
                            `<p>#${player.rank} ${player.player}: ${player.deaths} deaths</p>`
                        ).join('')}
                    </div>
                    <div class="stats-block">
                        <h3>Top Revives</h3>
                        ${data.topRevives.map(player => 
                            `<p>#${player.rank} ${player.player}: ${player.revives} revives</p>`
                        ).join('')}
                    </div>
                    <div class="stats-block">
                        <h3>Top Team Kills</h3>
                        ${data.topTeamKills.map(player => 
                            `<p>#${player.rank} ${player.player}: ${player.teamKills} TKs</p>`
                        ).join('')}
                    </div>
                    <div class="stats-block">
                        <h3>Top Melee Kills</h3>
                        ${data.topMeleeKills.map(player => 
                            `<p>#${player.rank} ${player.player}: ${player.meleeKills} melee kills</p>`
                        ).join('')}
                    </div>
                </div>
            `;
        case 'daily':
            return `
                <div class="stats-grid-content">
                    <div class="stats-block">
                        <h3>Server Stats</h3>
                        <p>Total Kills: ${data.serverStats.totalKills}</p>
                        <p>Total Team Kills: ${data.serverStats.totalTeamKills}</p>
                        <p>Total Melee Kills: ${data.serverStats.totalMeleeKills}</p>
                        <p>Total Revives: ${data.serverStats.totalRevives}</p>
                        <p>Total Matches: ${data.serverStats.totalMatches}</p>
                        <p>Unique Players: ${data.serverStats.uniquePlayers}</p>
                        <p>Linked Steam Users: ${data.serverStats.linkedSteamUsers}</p>
                    </div>
                    <div class="stats-block">
                        <h3>Top Kills</h3>
                        ${data.topKills.map(player => 
                            `<p>#${player.rank} ${player.player}: ${player.kills} kills</p>`
                        ).join('')}
                    </div>
                    <div class="stats-block">
                        <h3>Top Deaths</h3>
                        ${data.topDeaths.map(player => 
                            `<p>#${player.rank} ${player.player}: ${player.deaths} deaths</p>`
                        ).join('')}
                    </div>
                    <div class="stats-block">
                        <h3>Top Revives</h3>
                        ${data.topRevives.map(player => 
                            `<p>#${player.rank} ${player.player}: ${player.revives} revives</p>`
                        ).join('')}
                    </div>
                    <div class="stats-block">
                        <h3>Top Team Kills</h3>
                        ${data.topTeamKills.map(player => 
                            `<p>#${player.rank} ${player.player}: ${player.teamKills} TKs</p>`
                        ).join('')}
                    </div>
                    <div class="stats-block">
                        <h3>Top Melee Kills</h3>
                        ${data.topMeleeKills.map(player => 
                            `<p>#${player.rank} ${player.player}: ${player.meleeKills} melee kills</p>`
                        ).join('')}
                    </div>
                </div>
            `;
    }
}

// Function to manage search history
function addToSearchHistory(steamId) {
    if (!steamId) return;
    
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    
    // Remove if already exists to avoid duplicates
    searchHistory = searchHistory.filter(id => id !== steamId);
    
    // Add to beginning of array
    searchHistory.unshift(steamId);
    
    // Keep only last 5 searches
    searchHistory = searchHistory.slice(0, 5);
    
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}

function showSearchHistory() {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    const historyContainer = document.querySelector('.search-history');
    
    if (searchHistory.length === 0) {
        historyContainer.style.display = 'none';
        return;
    }
    
    historyContainer.innerHTML = searchHistory
        .map(id => `<div class="search-history-item">${id}</div>`)
        .join('');
    
    historyContainer.style.display = 'block';
}

// SteamID64 regex for validation
const steamID64Regex = /^7656\d{13}$/;

// Function to get user stats
async function getUserStats(inputSteamId) {
    const statsContent = document.querySelector('.personal-stats .stats-content');
    
    if (!inputSteamId) {
        statsContent.innerHTML = '<p class="error-message">Please enter a SteamID to search.</p>';
        statsContent.style.display = 'block';
        return;
    }

    if (!steamID64Regex.test(inputSteamId)) {
        statsContent.innerHTML = '<p class="error-message">Invalid SteamID64 format. Please enter a valid SteamID64 (e.g., 76561198310092616).</p>';
        statsContent.style.display = 'block';
        return;
    }
    
    // Add to search history
    addToSearchHistory(inputSteamId);
    
    try {
        const personalStats = await fetch('personal_stats.json').then(r => r.json());
        
        if (personalStats.steamId === inputSteamId) {
            statsContent.innerHTML = formatStats(personalStats, 'personal');
        } else {
            statsContent.innerHTML = '<p class="error-message">No deployment history found for this SteamID. Make sure you\'ve played on our server before searching.</p>';
        }
        statsContent.style.display = 'block';
    } catch (error) {
        console.error('Error loading personal stats:', error);
        statsContent.innerHTML = '<p class="error-message">Error loading stats. Please try again later.</p>';
        statsContent.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', async function() {
    const sections = document.querySelectorAll('.stats-section');
    const searchInput = document.querySelector('.stats-search');
    
    // Setup search input events
    searchInput.addEventListener('focus', showSearchHistory);
    searchInput.addEventListener('blur', () => {
        // Delay hiding to allow for clicks on suggestions
        setTimeout(() => {
            document.querySelector('.search-history').style.display = 'none';
        }, 200);
    });
    
    // Setup click handlers for search history items
    document.querySelector('.search-history').addEventListener('click', (e) => {
        if (e.target.classList.contains('search-history-item')) {
            searchInput.value = e.target.textContent;
            getUserStats(e.target.textContent);
        }
    });
    
    // Check for pending stats request
    const pendingStatsRequest = localStorage.getItem('pendingStatsRequest');
    if (pendingStatsRequest) {
        getUserStats(pendingStatsRequest);
        localStorage.removeItem('pendingStatsRequest');
    }

    // Load global stats
    try {
        const globalStats = await fetch('global_stats.json').then(r => r.json());
        const monthlyStats = await fetch('monthly_stats.json').then(r => r.json());
        const dailyStats = await fetch('daily_stats.json').then(r => r.json());

        // Set dates/periods
        document.getElementById('global-start-date').textContent = `Since ${globalStats.startDate}`;
        document.getElementById('monthly-period').textContent = monthlyStats.period;
        document.getElementById('daily-period').textContent = dailyStats.period;

        // Populate sections
        document.querySelector('.global-section .stats-content').innerHTML = 
            formatStats(globalStats, 'global');
        document.querySelector('.monthly-section .stats-content').innerHTML = 
            formatStats(monthlyStats, 'monthly');
        document.querySelector('.daily-section .stats-content').innerHTML = 
            formatStats(dailyStats, 'daily');

    } catch (error) {
        console.error('Error loading stats:', error);
    }

    // Section toggle functionality
    sections.forEach(section => {
        section.addEventListener('click', () => {
            if (section.classList.contains('active')) return;
            
            sections.forEach(s => {
                if (s.classList.contains('active')) {
                    s.classList.remove('active');
                    s.querySelector('.stats-content').style.display = 'none';
                }
            });
            
            section.classList.add('active');
            section.querySelector('.stats-content').style.display = 'block';
        });
    });
});
