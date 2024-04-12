import './CountryPage.css'
import {useLoaderData, useParams,Link} from 'react-router-dom'

const CountryPage = () => {
    const {country} = useParams()
    const selectedCountry = useLoaderData()
    console.log(selectedCountry)
    
    return selectedCountry.map((country,i) => {
        
        
        const nativeNameKey = Object.keys(country.name.nativeName).find((key) => {
            return country.name.nativeName[key]
        })

        const currencyKey = Object.keys(country.currencies).find((key) => {
            return country.currencies[key]
        })

        const languageKey = Object.keys(country.languages).find((key) => {
            return country.languages[key]
        })

        const nestedNativeName = country.name.nativeName[nativeNameKey];
        const nestedCurrencyName = country.currencies[currencyKey]; 
        const nestedLanguageKey = country.languages[languageKey]
        
        const nativeName = nestedNativeName ? nestedNativeName.common : "Unknown";

        const currency = nestedCurrencyName ? nestedCurrencyName.name : "Unknown";

        const language = nestedLanguageKey ? nestedLanguageKey : "Unknown";

        return(
        <div key={i} className="country-page">
            <div className="country-content">
                <div className="back-button-container">
                <button className="back-button">
                <img src="../assets/arrow-left-dark.svg" alt="" />
                <Link to='/' >Back</Link>
            </button>
                </div>
            

        <div className="country-info">
            <div className="country-info-flag">
                <img src={country.flags.svg} alt={`${country.name.common} flag`} />
            </div>
            <div className="country-info-details">
                <h2 className="country-name"> {country.name.common} </h2>
                <div className="country-info-stats">
                    <div className="country-info-stats-left">
                    <p className="population">Population: {country.population} </p>
                <p className="region">Region: {country.region} </p>
                <p className="capital">Capital: {country.capital} </p>
                <p className="native-name">Native name: {nativeName} </p>
                    </div>
                <div className="country-info-stats-right">
                <p className="top-level-domain">Top level domain: {country.tld} </p>
                <p className="currencies">Currencies: {currency}  </p>
                <p className="language">Language: {language} </p>
                </div>
                
                </div>
                
            </div>
            <div className="border-countries">

            </div>
        </div>
            </div>
        
    </div>)
        })
        
    
}

export const countryPageLoader = async ({params}) => {
    const {country} = params
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    if(!res.ok){
        throw Error('Could not find the country')
    }
    return res.json()
}
export default CountryPage;