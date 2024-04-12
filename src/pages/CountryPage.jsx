import './CountryPage.css'
import BorderChip from '../components/BorderChip'
import {useLoaderData, useParams,Link} from 'react-router-dom'

const CountryPage = () => {
    const {country} = useParams()
    const selectedCountry = useLoaderData()
    console.log(selectedCountry)
    
    return(
        <div className="country-page">
            {selectedCountry.map((countryData, i) => {
                const {
                    flags,
                    name,
                    population,
                    region,
                    capital,
                    currencies,
                    languages
                } = countryData;
                
                const nativeName = name.nativeName ? name.nativeName.common : "Unknown";
                const currency = currencies ? currencies[Object.keys(currencies)[0]].name : "Unknown";
                const language = languages ? Object.values(languages)[0] : "Unknown";

                return (
                    <div key={i} className="country-content">
                        <div className="back-button-container">
                            <button className="back-button">
                                <img src="../assets/arrow-left-dark.svg" alt="" />
                                <Link to='/'>Back</Link>
                            </button>
                        </div>
                        <div className="country-info">
                            <div className="country-info-flag">
                                <img src={flags.svg} alt={`${name.common} flag`} />
                            </div>
                            <div className="country-info-details">
                                <h2 className="country-name">{name.common}</h2>
                                <div className="country-info-stats">
                                    <div className="country-info-stats-left">
                                        <p className="population">Population: {population}</p>
                                        <p className="region">Region: {region}</p>
                                        <p className="capital">Capital: {capital}</p>
                                        <p className="native-name">Native name: {nativeName}</p>
                                    </div>
                                    <div className="country-info-stats-right">
                                        <p className="currencies">Currencies: {currency}</p>
                                        <p className="language">Language: {language}</p>
                                    </div>
                                </div>
                                <div className="border-countries">
                                    <p className="border-countries-title">Border Countries:</p>
                                    <div className="border-chips">
                                        <BorderChip />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export const countryPageLoader = async ({params}) => {
    const {country} = params
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${country}`)
    if(!res.ok){
        throw Error('Could not find the country')
    }
    return res.json()
}
export default CountryPage;