import './CountryCard.css'
import { NavLink } from 'react-router-dom'

const CountryCard = ({ countryData }) => {
    

    return countryData.map((country, i) => (
        <NavLink className="country-link" key={i} to={country.name.common}>
            <div className="country-card">
                <div className="country-flag">
                    <img
                        src={country.flags.svg}
                        alt={`${country.name.common} Flag`}
                    />
                </div>
                <div className="country-details">
                    <h4 className="country-name">{country.name.common}</h4>
                    <p className="country-text">
                        Population: {country.population}
                    </p>
                    <p className="country-text">Region: {country.region}</p>
                    <p className="country-text">Capital: {country.capital}</p>
                </div>
            </div>
        </NavLink>
    ));
};

export default CountryCard
