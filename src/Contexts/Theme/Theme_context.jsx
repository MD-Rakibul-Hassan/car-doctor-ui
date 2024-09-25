import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme)
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme]);

    const themeToggler = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        document.body.setAttribute('data-theme',theme)
    },[theme])
    const themeInfo = { theme, themeToggler,setTheme };
    return <ThemeContext.Provider value={themeInfo}>
        {children}
    </ThemeContext.Provider>
}