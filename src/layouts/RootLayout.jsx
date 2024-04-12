import './RootLayout.css'
import Navbar from '../components/Navbar';
import {Outlet} from 'react-router-dom'

const Rootlayout = () => {
    return(
        <div className="root-layout">
                <Navbar/>
            <div className="root-outlet">
                <Outlet/>
            </div>
        </div>
    )
}

export default Rootlayout;