import React, { useContext } from "react";
import styles from "./Settings.module.scss";
import { AppContext } from "../../context/context";
import SwitchButton from "../UI/SwitchButton"

const Settings = () => {
   const {
      textContent,
      language,
      theme,
      languageChangeHandler,
      themeChangeHandler,
   } = useContext(AppContext);

   const langPosition = language === "EN" ? "left" : "right"
   const themePosition = theme === "dark" ? "left" : "right"

   return (
      <div className={styles.Settings}>
         <div className={styles.container}>
            <h3 className={styles.header}>
               {textContent.settings.language}
            </h3>
            <div className={styles.innerContainer}>
               <span className={styles.optionLeft}>
                  {textContent.settings.english}
               </span>

               <SwitchButton
                  theme={theme}
                  position={langPosition}
                  onClick={languageChangeHandler}
               />

               <span className={styles.optionRight}>
                  {textContent.settings.polish}
               </span>
            </div>
         </div>
         <div className={styles.line} />

         <div className={styles.container}>
            <h3 className={styles.header}>{textContent.settings.color}</h3>
            <div className={styles.innerContainer}>
               <span className={styles.optionLeft}>
                  {textContent.settings.dark}
               </span>
               <SwitchButton
                  theme={theme}
                  position={themePosition}
                  onClick={themeChangeHandler}
               />
               <span className={styles.optionRight}>
                  {textContent.settings.light}
               </span>
            </div>
         </div>
      </div>
   );
};

export default Settings;
