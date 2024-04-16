import './SearchBar.css'
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
const SearchBar = ({ onChange, searchQuery }) => {
    const [theme, setTheme, currentTheme] = useOutletContext()
    const [focused, setFocused] = useState(false)
    const [hover, setHover] = useState(false)

    const handleFocus = () => {
        setFocused(true)
    }

    const handleBlur = () => {
        if (!searchQuery) {
            setFocused(false)
        }
    }
    
    const searchbarStyle = {
        borderColor: hover || focused ? currentTheme.borderHoverColor : '',
        border: focused ? currentTheme.focusBorder : '',
    }
    const placeholderStyle = {
        backgroundColor: focused ? currentTheme.bgColor : '',
        color: focused ? currentTheme.textColor : currentTheme.muteTextColor,
    }
    return (
        <div
            className="searchbar"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={searchbarStyle}
        >
            <input
                type="text"
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <span
                className={`placeholder ${
                    focused || searchQuery ? 'active' : ''
                }`}
                style={placeholderStyle}
            >
                Search countries...
            </span>
        </div>
    )
}

export default SearchBar
