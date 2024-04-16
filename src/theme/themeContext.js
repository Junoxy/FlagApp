import React, { createContext, useState, useContext } from 'react';
import { darkTheme,lightTheme } from './themeStyle';
// Step 1: Create the theme context
const ThemeContext = createContext();

// Step 2: Create a ThemeProvider component to wrap your application with
export const ThemeProvider = ({ children }) => {
    const [theme,setTheme] = useState(false)
    const currentTheme = theme ? darkTheme : lightTheme
    return (
        // Step 3: Provide the theme context value to all children components
        <ThemeContext.Provider value={{ theme, setTheme, currentTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Step 4: Create a custom hook to consume the theme context
export const useTheme = () => useContext(ThemeContext);