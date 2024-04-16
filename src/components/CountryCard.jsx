import './CountryCard.css'
import { NavLink,useOutletContext } from 'react-router-dom'

const CountryCard = ({ countryData }) => {
    const [theme, setTheme ,currentTheme] = useOutletContext()
    return countryData.map((country, i) => (
        <div key={i} className="country-card" style={{backgroundColor: currentTheme.bgColor}}>
            <NavLink className="country-link"  to={country.cca3} >
                <div className="country-flag">
                    <img
                        src={country.flags.svg}
                        alt={`${country.name.common} Flag`}
                    />
                </div>
                <div className="country-details"style={{color: currentTheme.muteTextColor}} >
                    <h4 className="country-name" style={{color: currentTheme.textColor}} >{country.name.common}</h4>
                    <p className="country-text">
                        <strong>Population:</strong> {country.population}
                    </p>
                    <p className="country-text">
                        <strong>Region:</strong> {country.region}
                    </p>
                    <p className="country-text">
                        <strong>Capital:</strong> {country.capital}
                    </p>
                </div>
            </NavLink>
        </div>
    ))
}

export default CountryCard
