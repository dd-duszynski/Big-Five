import React, { useState, useEffect } from 'react'
import PL from '../content/PL'
import EN from '../content/EN'

const AppContext = React.createContext()

const AppProvider = ({ children, appLanguage, appTheme }) => {
   const [size, setSize] = useState(null)

   const [language, setLanguage] = useState(appLanguage ? appLanguage : "PL")

   const [theme, setTheme] = useState(appTheme ? appTheme : "light")

   const innerWidthHandler = () => {
      setSize(window.innerWidth)
   }

   useEffect(() => {
      if (window) {
         setSize(window.innerWidth)
         window.addEventListener('resize', innerWidthHandler)
      }
      return () => {
         window.removeEventListener('resize', innerWidthHandler)
      }
   }, [])

   const languageChangeHandler = () => {
      if (language === "PL") {
         localStorage.setItem('language', "EN")
         setLanguage("EN")
      } else {
         localStorage.setItem('language', "PL")
         setLanguage("PL")
      }
   }

   const themeChangeHandler = () => {
      if (theme === "light") {
         localStorage.setItem('theme', "dark")
         setTheme("dark")
      } else {
         localStorage.setItem('theme', "light")
         setTheme("light")
      }
   }

   const textContent = language === "PL" ? PL : EN

   return (
      <AppContext.Provider
         value={{
            textContent,
            languageChangeHandler,
            themeChangeHandler,
            theme,
            size,
            language
         }}>
         {children}
      </AppContext.Provider>
   )
}

export { AppContext, AppProvider };