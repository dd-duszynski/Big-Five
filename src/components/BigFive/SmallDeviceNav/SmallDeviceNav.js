import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/context";
import styles from "./SmallDeviceNav.module.scss"

const SmallDeviceNav = ({ league }) => {
   const { theme, textContent } = useContext(AppContext);
   const css = theme === "light" ? styles.navLight : styles.navDark;
   return (
      <div className={css}>
         <Link
            className={styles.link}
            to={`results/${league.id}`}
         >
            <span className={styles.icon_vs} />
            {textContent.navigation[0]}
         </Link>

         <Link
            className={styles.link}
            to={`table/${league.id}`}
         >
            <span className={styles.icon_tab} />
            {textContent.navigation[1]}
         </Link>

         <Link
            className={styles.link}
            to={`scorers/${league.id}`}
         >
            <span className={styles.icon_stat} />
            {textContent.navigation[2]}
         </Link>
      </div>
   )
}

export default SmallDeviceNav
