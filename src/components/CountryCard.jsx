import './CountryCard.css'
import { NavLink } from 'react-router-dom'

const CountryCard = ({ countryData }) => {
    return countryData.map((country, i) => (
        <div className="country-card">
            <NavLink className="country-link" key={i} to={country.cca3}>
                <div className="country-flag">
                    <img
                        src={country.flags.svg}
                        alt={`${country.name.common} Flag`}
                    />
                </div>
                <div className="country-details">
                    <h4 className="country-name">{country.name.common}</h4>
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
