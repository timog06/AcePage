// Maintains a 5-item queue of searched IDs in localStorage
export const addToSearchHistory = (id, currentHistory) => {
  const newHistory = [id, ...currentHistory.filter(item => item !== id)].slice(0, 5);
  localStorage.setItem('steamIdHistory', JSON.stringify(newHistory));
  return newHistory;
};
