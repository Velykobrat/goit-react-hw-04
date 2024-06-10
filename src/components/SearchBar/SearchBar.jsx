import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleIconClick = () => {
        if (query.trim() === '') {
            alert('Please enter a search term');
            return;
        }
        onSubmit(query);
        setQuery('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleIconClick();
        }
    };

    return (
        <header className={styles.header}>
            <form className={styles.form} onKeyPress={handleKeyPress}>
                <input
                    className={styles.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={handleInputChange}
                />
                <FaSearch className={styles.icon} onClick={handleIconClick} />
            </form>
        </header>
    );
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;