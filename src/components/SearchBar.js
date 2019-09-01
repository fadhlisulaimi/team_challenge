import '../css/style-search.css';
import React from 'react';

const SearchBar = (props) => {
    return(
        <div className = "search-layout">
            <input type = "text" 
                placeholder="Search..."
                onChange={props.onSearchChange}
            />
        </div>
        
    );
}

export default SearchBar;