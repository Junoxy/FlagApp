import './NotFoundPage.css'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className="not-found">
            <div className="not-found-content">
                <Link className="not-found-back-link" to="/">
                    <button className="not-found-back-button">
                        <img src="../assets/arrow-left.svg" alt="" />
                        <p className="not-found-back-text">BACK</p>
                    </button>
                </Link>

                <p className='not-found-text'>Country Not Found</p>
            </div>
        </div>
    )
}

export default NotFoundPage
