import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../../styles/globalStyle.scss";
import styles from "./App.module.scss";
import { AppProvider } from "../../context/context";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import MainSwitch from "../MainSwitch/MainSwitch";

const localStorageLanguage = localStorage.getItem('language');
const localStorageTheme = localStorage.getItem('theme');

const browserLanguage = window.navigator.userLanguage || window.navigator.language;
const browserLanguageShort = browserLanguage.substring(0, 2).toUpperCase();
const browserlang = browserLanguageShort === "PL" ? "PL" : "EN";
const appLanguage = localStorageLanguage !== null ? localStorageLanguage : browserlang;
const appTheme = localStorageTheme !== null ? localStorageTheme : "light";

const App = () => {
   return (
      <AppProvider appLanguage={appLanguage} appTheme={appTheme}>
         <BrowserRouter>
            <div className={styles.app}>
               <Header />
               <Menu />
               <MainSwitch />
            </div>
         </BrowserRouter>
      </AppProvider>
   );
}


export default App;
