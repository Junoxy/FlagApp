import { Outlet, NavLink } from 'react-router-dom'
import './RootLayout.css'

const RootLayout = () => {
    let dayNight = "Darkmode"
    let logo = "../assets/techover-logo.png"

    
    return (
        <div className="root-layout">
            <header>
                <nav className="navbar">
                    <h3 className="app-title">The Flag App</h3>
                    <div className="logo">
                        <img src={logo} alt="techover logo" />
                    </div>
                    <div className="theme-switch-container">
                        <img src="" alt="" className="button-img" />
                        <button className="switch-theme"> {dayNight} </button>
                    </div>
                </nav>
            </header>
            <main>
                <div className="outlet-container">
                    <Outlet/>
                </div>
            </main>
        </div>
    )
}

export default RootLayout;