import { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';  

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const searchBarRef = useRef(null);

  const suggestions = [
    'About',
    'Project',
    'Contact',
    'Phone',
    'Whatsapp',
    'Linkedin',
    'Instagram',
    'Twitter',
    'Github',
  ];

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setIsSuggestionsVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setIsSuggestionsVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') setHighlightedIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
    else if (e.key === 'ArrowUp') setHighlightedIndex((prev) => Math.max(prev - 1, -1));
    else if (e.key === 'Enter') {
      if (highlightedIndex >= 0) handleSuggestionClick(suggestions[highlightedIndex]);
      else handleSearch(searchTerm);
    }
  };

  return (
    <div className="relative" ref={searchBarRef}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        className="text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onFocus={() => setIsSuggestionsVisible(true)}
      />
      <FaSearch
        className="absolute right-3 top-3 text-gray-500 cursor-pointer"
        onClick={() => handleSearch(searchTerm)}
      />
      {isSuggestionsVisible && (
        <div className="absolute text-black bg-white border border-gray-300 rounded-lg shadow-lg mt-1 w-full z-10">
          {suggestions
            .filter((suggestion) => suggestion.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((suggestion, index) => (
              <div
                key={index}
                className={`px-4 py-2 hover:bg-blue-500 cursor-pointer ${highlightedIndex === index ? 'bg-blue-200' : ''}`}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,  
};

export default SearchBar;
