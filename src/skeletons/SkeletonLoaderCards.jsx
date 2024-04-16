import './SkeletonLoaderCards.css'

const SkeletonLoaderCard = () => {
    return (
        <div className="skeleton-card">
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
        </div>
    )
}

export default SkeletonLoaderCard;
