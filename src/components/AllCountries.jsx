import './AllCountries.css'
import { NavLink,useLoaderData } from 'react-router-dom';

const AllCountries = ({region}) => {
    const countryData = useLoaderData() || []
    console.log(countryData)
    const filteredCountries = region 
    ? countryData.filter((country) => country.region === region) 
    : countryData
    console.log(region)
    return(
        <div className="all-countries">
            {filteredCountries
            .sort((a,b) => a.name.common.localeCompare(b.name.common))
            .map((country,i) => {
                return (
                    <NavLink className='country-link' key={i} to='country'>
                    <div className="country-card">
                        
                            <div className="country-flag">
                                <img src={country.flags.svg} alt={`${country.name.common} Flag`} />
                            </div>
                            <div className="country-details">
                                <h4 className="country-name"> {country.name.common} </h4>
                                <p className="country-text">Population: {country.population} </p>
                                <p className="country-text">Region: {country.region} </p>
                                <p className="country-text">Capital: {country.capital} </p>
                            </div>
                        
                    </div> 
                    </NavLink>   
                )
            })}
        </div>
    )
}

export const CountriesLoader = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all')
    if (!res.ok) {
        throw Error('Could not Fetch Data')
    }
    return res.json()
}

export default AllCountries;