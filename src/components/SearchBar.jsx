import './SearchBar.css'
import { useState } from 'react';
const SearchBar = ({ onChange,searchQuery }) => {
    const [focused,setFocused] = useState(false)
    const handleFocus = () => {
        setFocused(true);
        console.log(searchQuery)
    };

    const handleBlur = () => {
        if (!searchQuery) {
            setFocused(false);
            
        }
    };
    return (
        <div className="searchbar">
            <input
                type="text"
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <span className={`placeholder ${focused || searchQuery ? 'active' : ''}`}>Search countries...</span> 
        </div>
    );
};

export default SearchBar