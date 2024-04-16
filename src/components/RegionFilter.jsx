import { useState } from 'react'
import './RegionFilter.css'
import { useOutletContext } from 'react-router-dom'

const RegionFilter = ({ onChange }) => {
    const [hover, setHover] = useState(false)
    const [theme, setTheme, currentTheme] = useOutletContext()

    const regionSelectStyle = {
        borderColor: hover ? currentTheme.borderHoverColor : '',
        color: currentTheme.muteTextColor,
    }
    return (
        <div className="region-filter">
            <select
                className="region-select"
                onChange={onChange}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={regionSelectStyle}
            >
                <option value="" disabled hidden selected>
                    {' '}
                    Region
                </option>
                <option value="">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}

export default RegionFilter
