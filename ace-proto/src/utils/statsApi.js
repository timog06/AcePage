// Cache for player data to avoid redundant fetches
const playerCache = new Map();

// Fetches player stats from multiple JSON files, returns first match
export const fetchPlayerStats = async (steamId) => {
  // Return cached data if available
  if (playerCache.has(steamId)) {
    return playerCache.get(steamId);
  }

  for (let i = 1; i <= 3; i++) {
    try {
      const response = await fetch(`/AcePage/personal_stats_${i}.json`);
      const data = await response.json();
      if (steamId === data.steamId) {
        // Cache the result
        playerCache.set(steamId, data);
        return data;
      }
    } catch (err) {
      console.error(`Error fetching personal_stats_${i}.json:`, err);
    }
  }
  return null;
};

// Batch fetch multiple players at once
export const fetchMultiplePlayerStats = async (steamIds) => {
  const results = {};
  const fetchPromises = steamIds.map(async (id) => {
    const data = await fetchPlayerStats(id);
    if (data) {
      results[id] = data;
    }
  });
  
  await Promise.all(fetchPromises);
  return results;
};

// Clear the cache (useful when data might have changed)
export const clearPlayerCache = () => {
  playerCache.clear();
};
