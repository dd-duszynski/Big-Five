import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { AppContext } from "../../context/context";

const Header = (props) => {
   const { textContent, theme } = useContext(AppContext)
   let theme2;
   theme === "light" ? (theme2 = styles.header) : (theme2 = styles.headerDark);

   return (
      <header className={theme2}>
         <Link to="/">
            <h1 className={styles.home}>BIG FIVE</h1>
         </Link>
         <nav className={styles.navigation}>
            <ul className={styles.navigation_list}>
               <li>
                  <NavLink
                     className={styles.headerListItem}
                     activeClassName={styles.activeHeader}
                     exact
                     to="/settings"
                  >
                     {textContent.navigation[3]}
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     className={styles.headerListItem}
                     activeClassName={styles.activeHeader}
                     exact
                     to="/info"
                  >
                     {textContent.navigation[5]}
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;
