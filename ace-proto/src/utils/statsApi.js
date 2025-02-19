export const fetchPlayerStats = async (steamId) => {
  for (let i = 1; i <= 3; i++) {
    try {
      const response = await fetch(`/AcePage/personal_stats_${i}.json`);
      const data = await response.json();
      if (steamId === data.steamId) {
        return data;
      }
    } catch (err) {
      console.error(`Error fetching personal_stats_${i}.json:`, err);
    }
  }
  return null;
};
