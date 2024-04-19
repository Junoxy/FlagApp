import './SkeletonCountryPage.css'
import {Link, useOutletContext} from 'react-router-dom'

const SkeletonCountryPage = () => {
    const [theme, setTheme, currentTheme] = useOutletContext()
  return (
    <div  className="country-content">
                            <Link className="back-link" to="/">
                            <button className="back-button">
                                <img
                                    src={currentTheme.backButtonImg}
                                    alt=""
                                />
                                <p className='back-text' style={{color: currentTheme.textColor}}>BACK</p>
                            </button>
                            </Link>
                        
                        <div className="country-info">
                            <div className="country-info-flag-skeleton">
                                
                            </div>
                            <div className="country-info-details">
                                <h1 className="country-title-skeleton"></h1>
                                <div className="country-info-stats">
                                    <div className="country-info-stats-left">
                                        <p className="skeleton-text-container" >
                                           <strong style={{color: currentTheme.textColor}}>Population:</strong> 
                                           <span className="skeleton-text"></span>
                                        </p>
                                        <p className="skeleton-text-container">
                                            <strong style={{color: currentTheme.textColor}}>Region:</strong> 
                                            <span className="skeleton-text"></span>
                                        </p>
                                        <p className="skeleton-text-container">
                                            <strong style={{color: currentTheme.textColor}}>Capital:</strong> 
                                            <span className="skeleton-text"></span>
                                        </p>
                                        <p className="skeleton-text-container">
                                            <strong style={{color: currentTheme.textColor}}>Native name:</strong> 
                                            <span className="skeleton-text"></span>
                                        </p>
                                    </div>
                                    <div className="country-info-stats-right">
                                        <p className="skeleton-text-container">
                                            <strong style={{color: currentTheme.textColor}}>Top Level Domain:</strong> 
                                            <span className="skeleton-text"></span>
                                        </p>
                                        <p className="skeleton-text-container">
                                            <strong style={{color: currentTheme.textColor}}>Currencies:</strong> 
                                            <span className="skeleton-text"></span>
                                        </p>
                                        <p className="skeleton-text-container">
                                            <strong style={{color: currentTheme.textColor}}>Language:</strong> 
                                            <span className="skeleton-text"></span>
                                        </p>
                                    </div>
                                </div>
                                <div className="border-countries-skeleton">
                                    <p className="border-countries-title">
                                        <strong style={{color: currentTheme.textColor}}>Border Countries:</strong>
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