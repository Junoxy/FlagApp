import './SkeletonCountryPage.css'
import {Link} from 'react-router-dom'

const SkeletonCountryPage = () => {
  return (
    <div  className="country-content">
                            <Link className="back-link" to="/">
                            <button className="back-button">
                                <img
                                    src="../assets/arrow-left.svg"
                                    alt=""
                                />
                                <p className='back-text'>BACK</p>
                            </button>
                            </Link>
                        
                        <div className="country-info">
                            <div className="country-info-flag-skeleton">
                                
                            </div>
                            <div className="country-info-details">
                                <h1 className="country-title-skeleton"></h1>
                                <div className="country-info-stats">
                                    <div className="country-info-stats-left">
                                        <p className="skeleton-text-container">
                                           <strong>Population:</strong> 
                                           <span className="skeleton-text"></span>
                                        </p>
                                        <p className="skeleton-text-container">
                                            <strong>Region:</strong> 
                                            <span className="skeleton-text"></span>
                                        </p>
                                        <p className="skeleton-text-container">
                                            <strong>Capital:</strong> 
                                            <span className="skeleton-text"></span>
                                        </p>
                                        <p className="skeleton-text-container">
                                            <strong>Native name:</strong> 
                                            <span className="skeleton-text"></span>
                                        </p>
                                    </div>
                                    <div className="country-info-stats-right">
                                        <p className="skeleton-text-container">
                                            <strong>Top Level Domain:</strong> 
                                            <span className="skeleton-text"></span>
                                        </p>
                                        <p className="skeleton-text-container">
                                            <strong>Currencies:</strong> 
                                            <span className="skeleton-text"></span>
                                        </p>
                                        <p className="skeleton-text-container">
                                            <strong>Language:</strong> 
                                            <span className="skeleton-text"></span>
                                        </p>
                                    </div>
                                </div>
                                <div className="border-countries-skeleton">
                                    <p className="border-countries-title">
                                        <strong>Border Countries:</strong>
                                    </p>
                                    <div className="border-chips">
                                        <div className="border-chip-skeleton"></div>
                                        <div className="border-chip-skeleton"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}


export default SkeletonCountryPage;