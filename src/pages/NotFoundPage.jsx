import './NotFoundPage.css'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className="not-found">
            <div className="not-found-content">
                <div className="back-button">
                    <img src="../assets/arrow-left-dark.svg" alt="" />
                <button><Link to="/">Back</Link></button>
                </div>
                
                <h3>Country Not Found</h3>
            </div>
        </div>
    )
}

export default NotFoundPage
