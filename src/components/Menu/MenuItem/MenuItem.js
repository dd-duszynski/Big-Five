import React, { useContext } from "react";
import styles from "./MenuItem.module.scss";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../../context/context";
import Flags from "../../UI/Flags";

const MenuItem = ({ id, league }) => {
   const { textContent } = useContext(AppContext);
   
   return (
      <ul className={styles.MenuItem}>
         <li className={[styles.listItem, styles.headerBox].join(" ")}>
            <Flags id={id} />
            <h2 className={styles.header}>{league}</h2>
         </li>

         <li className={styles.listItem}>
            <NavLink
               className={styles.leagueLink}
               activeClassName={styles.leagueLinkActive}
               exact
               to={`/results/${id}`}
            >
               <span className={styles.icon_vs} />
               {textContent.navigation[0]}
            </NavLink>
         </li>

         <li className={styles.listItem}>
            <NavLink
               className={styles.leagueLink}
               activeClassName={styles.leagueLinkActive}
               exact
               to={`/table/${id}`}
            >
               <span className={styles.icon_tab} />
               {textContent.navigation[1]}
            </NavLink>
         </li>

         <li className={styles.listItem}>
            <NavLink
               className={styles.leagueLink}
               activeClassName={styles.leagueLinkActive}
               exact
               to={`/scorers/${id}`}
            >
               <span className={styles.icon_stat} />
               {textContent.navigation[2]}
            </NavLink>
         </li>
      </ul>
   );
};

export default MenuItem;
