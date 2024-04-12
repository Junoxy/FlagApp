import './BorderChip.css'
import {useLoaderData, Link} from 'react-router-dom'

const BorderChip = () => {
    const selectedCountry = useLoaderData()
    const borderingCountries = selectedCountry.flatMap((country) => country.borders)
    console.log(borderingCountries)
    
    if (borderingCountries[0] === undefined) {
        return <p>No bordering countries</p>;
    }

    return  borderingCountries.map((country,i) => {
        return(
            <Link className='border-link' key={i} to={`/${country}`}>
                <div  className="border-country">
                    <p> {country} </p>

                </div>
            </Link>
        )
        
    })
    
}

export default BorderChip;