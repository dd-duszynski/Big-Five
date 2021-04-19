import React, { useContext } from "react";
import styles from "./MenuItem.module.scss";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../../../context/context";
import Flags from "../../UI/Flags";

const MenuItem = ({ id, league }) => {
   const { textContent } = useContext(AppContext);

   return (
      <ul className={styles.MenuItem}>
         <Link
            to={`/table/${id}`}
            className={[styles.listItem, styles.headerBox].join(" ")}
         >
            <li>
               <Flags id={id} />
               <h2 className={styles.header}>{league}</h2>
            </li>
         </Link>

         <li className={styles.listItem}>
            <NavLink
               className={styles.leagueLink}
               activeClassName={styles.leagueLinkActive}
               exact
               to={`/results/${id}`}
            >
               <span className={styles.icon_vs} />
               {textContent.navigation.results}
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
               {textContent.navigation.table}
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
               {textContent.navigation.scorers}
            </NavLink>
         </li>
      </ul>
   );
};

export default MenuItem;
