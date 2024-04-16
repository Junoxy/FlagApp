import './CountryPage.css'
import BorderChip from '../components/BorderChip'
import SkeletonCountryPage from '../skeletons/SkeletonCountryPage'
import { useLoaderData, useParams, Link, useOutletContext } from 'react-router-dom'
import { useState, useEffect } from 'react'

const CountryPage = () => {
    const [loading, setLoading] = useState(true)
    const [theme,setTheme,currentTheme] = useOutletContext()
    const { country } = useParams()
    const selectedCountry = useLoaderData()

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000);
        
    }, [selectedCountry])

    
    return (
        <div className="country-page" style={{backgroundColor: currentTheme.bgColor}}>
            {loading ? 
                <SkeletonCountryPage />
             : 
                selectedCountry.map((countryData, i) => {
                    const {
                        flags,
                        name,
                        population,
                        region,
                        capital,
                        currencies,
                        languages,
                        tld,
                    } = countryData

                    const nativeName = name.nativeName
                        ? name.nativeName[Object.keys(name.nativeName)[0]]
                              .common
                        : 'Unknown'
                    const currency = currencies
                        ? currencies[Object.keys(currencies)[0]].name
                        : 'Unknown'
                    const language = languages
                        ? Object.values(languages)[0]
                        : 'Unknown'

                    return (
                        <div key={i} className="country-content">
                            <Link className="back-link" to="/">
                                <button className="back-button" >
                                    <img
                                        src={currentTheme.backButtonImg}
                                        alt=""
                                    />
                                    <p className="back-text" style={{color: currentTheme.textColor}}>BACK</p>
                                </button>
                            </Link>

                            <div className="country-info">
                                <div className="country-info-flag">
                                    <img
                                        src={flags.svg}
                                        alt={`${name.common} flag`}
                                    />
                                </div>
                                <div className="country-info-details">
                                    <h1 className="country-title" style={{color: currentTheme.textColor}}>
                                        {name.common}
                                    </h1>
                                    <div className="country-info-stats" style={{color: currentTheme.textColor}}>
                                        <div className="country-info-stats-left">
                                            <p className="population">
                                                <strong>Population:</strong>{' '}
                                                {population}
                                            </p>
                                            <p className="region">
                                                <strong>Region:</strong>{' '}
                                                {region}
                                            </p>
                                            <p className="capital">
                                                <strong>Capital:</strong>{' '}
                                                {capital}
                                            </p>
                                            <p className="native-name">
                                                <strong>Native name:</strong>{' '}
                                                {nativeName}
                                            </p>
                                        </div>
                                        <div className="country-info-stats-right">
                                            <p className="tld">
                                                <strong>
                                                    Top Level Domain:
                                                </strong>{' '}
                                                {tld}
                                            </p>
                                            <p className="currencies">
                                                <strong>Currencies:</strong>{' '}
                                                {currency}
                                            </p>
                                            <p className="language">
                                                <strong>Language:</strong>{' '}
                                                {language}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="border-countries" >
                                        <p className="border-countries-title">
                                            <strong style={{color: currentTheme.textColor}}>Border Countries:</strong>
                                        </p>
                                        <div className="border-chips">
                                            <BorderChip />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export const countryPageLoader = async ({ params }) => {
    const { country } = params
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${country}`)
    if (!res.ok) {
        throw Error('Could not find the country')
    }
    return res.json()
}
export default CountryPage
