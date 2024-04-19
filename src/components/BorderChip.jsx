import { useState } from 'react'
import './BorderChip.css'
import { useLoaderData, Link, useOutletContext } from 'react-router-dom'

const BorderChip = () => {
    const selectedCountry = useLoaderData()
    const [hoveredChip, setHoveredChip] = useState(null)
    const [theme, setTheme, currentTheme] = useOutletContext()
    const borderingCountries = selectedCountry.flatMap(
        (country) => country.borders
    )

    if (borderingCountries[0] === undefined) {
        return <p style={{color: currentTheme.textColor}}>No bordering countries</p>
    }

    return borderingCountries.map((country, i) => {
        return (
            <Link className="border-link" key={i} to={`/${country}`}>
                <div
                    className="border-country"
                    style={{
                        backgroundColor:
                            hoveredChip === i
                                ? currentTheme.borderChipBgHover
                                : currentTheme.borderChipBg,
                    }}
                    onMouseEnter={() => setHoveredChip(i)}
                    onMouseLeave={() => setHoveredChip(null)}
                >
                    <p style={{ color: currentTheme.textColor }}> {country} </p>
                </div>
            </Link>
        )
    })
}

export default BorderChip
