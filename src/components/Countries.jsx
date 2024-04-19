import './Countries.css'
import CountryCard from './CountryCard'
import SkeletonLoaderCard from '../skeletons/SkeletonLoaderCards'

const Countries = ({ countryData, loading }) => {
    return (
        <div className="countries">
            {loading ? (
                <SkeletonLoaderCard />
            ) : (
                <CountryCard countryData={countryData} />
            )}
        </div>
    )
}

export default Countries
