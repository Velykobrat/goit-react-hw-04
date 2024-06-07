// src/components/SearchBar/SearchBar.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === '') {
            alert('Please enter a search term');
            return;
        }
        onSubmit(query);
        setQuery('');
    };

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>
        </header>
    );
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
