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
      // Sanitize input - only allow alphanumeric and hyphens
      const sanitizedId = searchId.replace(/[^a-zA-Z0-9-]/g, '');
      if (sanitizedId !== searchId) {
        toast.error('Invalid Steam ID format');
        return;
      }
      updateSearchHistory(sanitizedId);
      onSearch(sanitizedId);
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
