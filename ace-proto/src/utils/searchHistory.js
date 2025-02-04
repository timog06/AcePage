export const addToSearchHistory = (id, currentHistory) => {
  const newHistory = [id, ...currentHistory.filter(item => item !== id)].slice(0, 5);
  localStorage.setItem('steamIdHistory', JSON.stringify(newHistory));
  return newHistory;
};
