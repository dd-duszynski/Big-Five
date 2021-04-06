import React, { useState, useContext } from "react";
import styles from "./Settings.module.scss";
import { AppContext } from "../../context/context";

const Settings = () => {
   const {
      textContent,
      language,
      theme,
      languageChangeHandler,
      themeChangeHandler,
   } = useContext(AppContext);

   let switchTheme, switchLanguage;

   language === "PL"
      ? (switchLanguage = styles.switch_pl)
      : (switchLanguage = styles.switch_en);

   if (theme === "light") {
      switchTheme = styles.switchThemeLight;
   } else {
      switchTheme = styles.switchThemeDark;
   }


   return (
      <div className={styles.settings}>
         <div className={styles.settings_container}>
            <h3>{textContent.settings[0]}</h3>
            <div className={styles.settings_innerContainer}>
               <span className={styles.settings_left}>
                  {textContent.settings[1]}
               </span>

               <div
                  className={[styles.switch, switchLanguage].join(" ")}
                  onClick={languageChangeHandler}
               />

               <span className={styles.settings_right}>
                  {textContent.settings[2]}
               </span>
            </div>
         </div>
         <div className={styles.line} />
         <div className={styles.settings_container}>
            <h3>{textContent.settings[3]}</h3>
            <div className={styles.settings_innerContainer}>
               <span className={styles.settings_left}>
                  {textContent.settings[4]}
               </span>
               <div
                  className={[styles.switch, switchTheme].join(" ")}
                  onClick={themeChangeHandler}
               />
               <span className={styles.settings_right}>
                  {textContent.settings[5]}
               </span>
            </div>
         </div>
      </div>
   );
};

export default Settings;
