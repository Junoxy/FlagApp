import './SkeletonLoaderCards.css'

const SkeletonLoaderCard = () => {
    return (
        <div className="skeleton-card">
            <div className="country-flag-skeleton"></div>
            <div className="country-details-skeleton">
                <h4 className="country-name-skeleton"></h4>
                <p className="country-text">
                    Population: <div className="country-text-skeleton-pop"></div>
                </p>
                <p className="country-text">
                    Region: <div className="country-text-skeleton"></div>
                </p>
                <p className="country-text">
                    Capital: <div className="country-text-skeleton"></div>
                </p>
            </div>
        </div>
    )
}

export default SkeletonLoaderCard;
