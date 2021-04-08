import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import styles from "./MainBar.module.scss";
import Flags from "./Flags";
import { RiArrowUpSLine } from "react-icons/ri"

const MainBar = ({ league, onClick, choosen, noClick }) => {
   const { theme } = useContext(AppContext);

   const css =
      theme === "light" ? styles.LeagueScoresLight : styles.LeagueScoresDark;

   const iconCSS = choosen ? [styles.icon, styles.rotate].join(' ') : styles.icon;

   const clickHandler = onClick ? onClick : null;

   return (
      <div className={css} onClick={clickHandler}>
         <Flags id={league.id} />
         <h2 className={styles.header}>{league.name}</h2>
         {!noClick && <RiArrowUpSLine className={iconCSS} />}
      </div>
   );
};

export default MainBar;
