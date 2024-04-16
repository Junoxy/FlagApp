import './Countries.css'
import CountryCard from './CountryCard'
import SkeletonLoaderCard from '../skeletons/SkeletonLoaderCards'

const Countries = ({ countryData, loading }) => {
    return (
        <div className="countries">
            {loading ? 
                <div className="countries">
                    <SkeletonLoaderCard />
                    <SkeletonLoaderCard />
                    <SkeletonLoaderCard />
                    <SkeletonLoaderCard />
                    <SkeletonLoaderCard />
                    <SkeletonLoaderCard />
                    <SkeletonLoaderCard />
                    <SkeletonLoaderCard />
                    <SkeletonLoaderCard />
                    <SkeletonLoaderCard />
                    <SkeletonLoaderCard />
                    <SkeletonLoaderCard />
                </div>
            : 
                <CountryCard countryData={countryData} />
            }
        </div>
    )
}

export default Countries
