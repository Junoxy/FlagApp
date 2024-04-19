import './SkeletonLoaderCards.css'

const SkeletonLoaderCard = () => {
    const cards = [1,2,3,4,5,6,7,8,9,10,11,12]
    return ( cards.map((card,i) => {
        return(
        <div className="skeleton-card" key={i}>
        <div className="country-flag-skeleton"></div>
        <div className="country-details-skeleton">
            <h4 className="country-name-skeleton"></h4>
            <p className="country-text">
                Population: <span className="country-text-skeleton-pop"></span>
            </p>
            <p className="country-text">
                Region: <span className="country-text-skeleton"></span>
            </p>
            <p className="country-text">
                Capital: <span className="country-text-skeleton"></span>
            </p>
        </div>
    </div>)
    })
       
    )
}

export default SkeletonLoaderCard;
