import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/context";
import styles from "./SmallDeviceMiniTable.module.scss";
import resultIcon from "../../../assets/icons/result-icon.svg";
import scorersIcon from "../../../assets/icons/scorers-icon.svg";
import tabelIcon from "../../../assets/icons/tabel-icon.svg";

const SmallDeviceMiniTable = ({ league }) => {
   const { theme, textContent } = useContext(AppContext);
   const css = theme === "light" ? styles.navLight : styles.navDark;
   return (
      <div className={css}>
         <Link className={styles.link} to={`results/${league.id}`}>
            <img src={resultIcon} alt="" className={styles.icon} />
            {textContent.navigation[0]}
         </Link>
         <div className={styles.line} />
         <Link className={styles.link} to={`table/${league.id}`}>
            <img src={tabelIcon} alt="" className={styles.icon} />
            {textContent.navigation[1]}
         </Link>
         <div className={styles.line} />

         <Link className={styles.link} to={`scorers/${league.id}`}>
            <img src={scorersIcon} alt="" className={styles.icon} />
            {textContent.navigation[2]}
         </Link>
      </div>
   );
};

export default SmallDeviceMiniTable;
