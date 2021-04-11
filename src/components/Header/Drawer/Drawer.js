import React, { useContext } from 'react'
import styles from "./Drawer.module.scss"
import { NavLink } from "react-router-dom";
import { AppContext } from "../../../context/context"

const Drawer = ({ isDrawerOpenHandler }) => {
   const { textContent, theme } = useContext(AppContext)

   const cssDrawer = theme === "light" ? styles.DrawerLight : styles.DrawerDark;

   return (
      <nav className={cssDrawer}>
         <ul className={styles.navList}>
            <li>
               <NavLink
                  className={styles.navListItem}
                  activeClassName={styles.navListItemActive}
                  exact
                  to="/"
               >
                  {textContent.navigation[3]}
               </NavLink>
            </li>
            <li>
               <NavLink
                  className={styles.navListItem}
                  activeClassName={styles.navListItemActive}
                  exact
                  to="/settings"
               >
                  {textContent.navigation[4]}
               </NavLink>
            </li>
            <li>
               <NavLink
                  className={styles.navListItem}
                  activeClassName={styles.navListItemActive}
                  exact
                  to="/info"
               >
                  {textContent.navigation[5]}
               </NavLink>
            </li>
         </ul>
      </nav>
   )
}

export default Drawer
