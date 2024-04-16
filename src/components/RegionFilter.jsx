import { useState } from 'react'
import './RegionFilter.css'
import { useOutletContext } from 'react-router-dom'

const RegionFilter = ({ selectedRegion, setSelectedRegion }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [dropDownFocus, setDropDownFocus] = useState(false)
    const [dropDownHover, setDropDownHover] = useState(false)
    const [theme, setTheme, currentTheme] = useOutletContext()
    const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    const toggleDropDown = () => {
        setIsOpen(!isOpen)
        setDropDownFocus(true)
    }

    return (
        <div
            className="region-filter"
            onMouseEnter={() => setDropDownHover(true)}
            onMouseLeave={() => setDropDownHover(false)}
            style={{
                borderColor:
                    dropDownHover || dropDownFocus
                        ? currentTheme.borderHoverColor
                        : '',
                border: dropDownFocus ? currentTheme.focusBorder : '',
            }}
        >
            <div className="drop-down-btn" onClick={toggleDropDown}>
                <p
                    className={`region-placeholder ${
                        dropDownFocus ? 'active' : ''
                    }`}
                    style={{
                        color: dropDownFocus
                            ? currentTheme.textColor
                            : currentTheme.muteTextColor,
                        backgroundColor: currentTheme.bgColor,
                    }}
                >
                    Region
                </p>
                <p className="selected-region" style={{color: currentTheme.textColor}}>
                    {' '}
                    {selectedRegion === null
                        ? 'All'
                        : dropDownFocus
                        ? selectedRegion
                        : ''}{' '}
                </p>
                <div className="down-arrow">
                    <img src={currentTheme.downArrow} alt="" />
                </div>
            </div>
            {isOpen && (
                <div
                    className="drop-down-content"
                    style={{ backgroundColor: currentTheme.bgColor2 }}
                >
                    {regions.map((region, i) => {
                        return (
                            <div
                                onClick={() => {
                                    region !== 'All'
                                        ? setSelectedRegion(region)
                                        : setSelectedRegion(null)
                                    setIsOpen(false)
                            
                                }}
                                className="drop-down-item"
                                style={{ color: currentTheme.textColor }}
                                key={i}
                            >
                                {region}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default RegionFilter
