import { useState, useEffect } from 'react';
import { addToSearchHistory } from '../utils/searchHistory';

const SearchBar = ({ onSearch, placeholder = "Enter Steam ID", buttonText = "Get Stats" }) => {
  const [searchId, setSearchId] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    const savedHistory = localStorage.getItem('steamIdHistory');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  const updateSearchHistory = (id) => {
    const newHistory = addToSearchHistory(id, searchHistory);
    setSearchHistory(newHistory);
  };

  const handleSearch = () => {
    if (searchId) {
      updateSearchHistory(searchId);
      onSearch(searchId);
    }
  };

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder={placeholder}
          className="steam-id-input"
          onFocus={() => setIsInputFocused(true)}
          onBlur={(e) => {
            setTimeout(() => setIsInputFocused(false), 200);
          }}
        />
        
        {searchHistory.length > 0 && isInputFocused && (
          <div className="search-history">
            {searchHistory.map((id, index) => (
              <button
                key={index}
                className="history-item"
                onClick={() => setSearchId(id)}
              >
                {id}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <button
        onClick={handleSearch}
        disabled={!searchId}
        className="search-button"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default SearchBar;
