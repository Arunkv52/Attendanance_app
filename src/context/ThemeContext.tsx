import { createContext, useState } from "react";

export const ThemeContext = createContext()


const ThemeProvider = ({children}:any) => {
    
    const [theme,setTheme] = useState('light')  // light is default

    const themeChange = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }
    return (
       
         <ThemeContext.Provider value={{theme,themeChange}}>
            {children}
        </ThemeContext.Provider>
      
    )
}


export default ThemeProvider