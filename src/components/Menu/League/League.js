/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */
import React, {useContext} from "react";
import styles from "./League.module.scss";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../../context/context";

const League = (props) => {
   let flagIcon;
   switch (props.id) {
      case "BL1":
         flagIcon = styles.BL1;
         break;
      case "PD":
         flagIcon = styles.PD;
         break;
      case "FL1":
         flagIcon = styles.FL1;
         break;
      case "PL":
         flagIcon = styles.PL;
         break;
      case "SA":
         flagIcon = styles.SA;
   }
   const { textContent } = useContext(AppContext)
   return (
      <ul className={styles.leagueContainer}>
         <li className={styles.leagues}>
            <span className={flagIcon} />
            <h2 className={styles.leagueName}>{props.league}</h2>
         </li>
         <li>
            <span className={styles.icon_vs} />
            <NavLink
               className={styles.leagueLink}
               activeClassName={styles.leagueLinkActive}
               exact
               to={`/results/${props.id}`}
            >
               {textContent.navigation[0]}
            </NavLink>
         </li>
         <li>
            <span className={styles.icon_tab} />
            <NavLink
               className={styles.leagueLink}
               activeClassName={styles.leagueLinkActive}
               exact
               to={`/table/${props.id}`}
            >
               {textContent.navigation[1]}
            </NavLink>
         </li>
         <li>
            <span className={styles.icon_stat} />
            <NavLink
               className={styles.leagueLink}
               activeClassName={styles.leagueLinkActive}
               exact
               to={`/scorers/${props.id}`}
            >
               {textContent.navigation[2]}
            </NavLink>
         </li>
      </ul>
   );
}

export default League;
