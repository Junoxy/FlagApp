import './RootLayout.css'
import Navbar from '../components/Navbar';
import {Outlet} from 'react-router-dom'
import { useState } from 'react';
import { darkTheme,lightTheme } from '../theme/themeStyle';

const Rootlayout = () => {
    const [theme,setTheme] = useState(true)
    const currentTheme = theme ? darkTheme : lightTheme
    return(
        <div className="root-layout" style={{backgroundColor: currentTheme.bgColor }} >
                <Navbar theme={theme} setTheme={setTheme} currentTheme={currentTheme} />
            <div className="root-outlet">
                <Outlet context={[theme,setTheme,currentTheme]}/>
            </div>
        </div>
    )
}

export default Rootlayout;