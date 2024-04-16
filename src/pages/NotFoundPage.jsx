import './NotFoundPage.css'
import { Link, useOutletContext} from 'react-router-dom'

const NotFoundPage = () => {
    const [theme,setTheme, currentTheme] = useOutletContext()
    return (
        <div className="not-found">
            <div className="not-found-content">
                <Link className="not-found-back-link" to="/">
                    <button className="not-found-back-button" style={{color: currentTheme.textColor}}>
                        <img src={currentTheme.backButtonImg} alt="" />
                        <p className="not-found-back-text">BACK</p>
                    </button>
                </Link>

                <p className='not-found-text' style={{color: currentTheme.textColor}}>Country Not Found</p>
            </div>
        </div>
    )
}

export default NotFoundPage
