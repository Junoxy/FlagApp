import { useState } from 'react'
import '../componentCss/Navbar.css'

const Navbar = ({darkTheme, lightTheme}) => {
    const [theme, setTheme] = useState(true)
    console.log(theme)

    return (
        <header>
            <nav className="navbar">
                <div className="app-title">The Flag App</div>
                <img
                    className="techover-logo"
                    src="/assets/techover-logo-dark.png"
                    alt="techover logo"
                />
                <div>
                    {theme === true ? (
                        <button
                            onClick={() => {
                                setTheme(false)
                                lightTheme()
                            }}
                            className="theme-switch"
                        >
                            <img
                                src="/assets/moon.svg"
                                alt="theme-switch-img"
                            />
                            <p className="light-dark"> DARK MODE</p>
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                setTheme(true)
                                darkTheme()
                            }}
                            className="theme-switch"
                        >
                            <img
                                src="/assets/moon-bordered.svg"
                                alt="theme-switch-img"
                            />
                            <p className="light-dark"> LIGHT MODE</p>
                        </button>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
