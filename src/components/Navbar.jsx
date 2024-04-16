import './Navbar.css'
const Navbar = ({ theme, setTheme ,currentTheme }) => {
    
    const switchTheme = () => {
        setTheme(!theme ? true : false)
        console.log(theme)
    }
    
    return (
        <nav className="navbar" style={{backgroundColor:currentTheme.navBgColor}}>
            <div className="navbar-content">
                <div className="app-title" style={{color: currentTheme.textColor}}>The Flag App</div>
                <div className="logo">
                    <img src={currentTheme.techOverLogo} alt="techover logo" />
                </div>
                <div className="switch-theme" onClick={switchTheme}>
                    <img src={currentTheme.switchThemeImg} alt="" />
                    <button  className="light-dark-button" style={{color: currentTheme.textColor}}>
                        {currentTheme.switchThemeButtonText}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
