// Cookie utility functions
const setCookie = (name, value, days = 30) => {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
};

const getCookie = (name) => {
  const cookieName = `${name}=`;
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return '';
};

// Maintains a 5-item queue of searched IDs in cookies
export const addToSearchHistory = (id, currentHistory) => {
  const newHistory = [id, ...currentHistory.filter(item => item !== id)].slice(0, 5);
  setCookie('steamIdHistory', JSON.stringify(newHistory));
  return newHistory;
};

// Get search history from cookies
export const getSearchHistory = () => {
  const history = getCookie('steamIdHistory');
  return history ? JSON.parse(history) : [];
};
