import './Countries.css'
import CountryCard from './CountryCard';


const Countries = ({countryData}) => {
    
    return(
        <div className="countries">
            <CountryCard countryData={countryData} />
        </div>
    )
}

export default Countries;