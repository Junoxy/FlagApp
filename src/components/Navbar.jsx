import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="app-title">The Flag App</div>
                <div className="logo">
                    <img src="../assets/techover-logo-dark.png" alt="techover logo" />
                </div>
                <div className="switch-theme">
                    <img src="../assets/moon-bordered.svg" alt="" />
                    <button className="light-dark-button">DARK MODE</button>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar;