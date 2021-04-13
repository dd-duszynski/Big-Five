import React, { useContext } from 'react'
import styles from "./Drawer.module.scss"
import { NavLink } from "react-router-dom";
import { AppContext } from "../../../context/context"

const Drawer = ({ isDrawerOpen, isDrawerOpenHandler }) => {
   const { textContent, theme } = useContext(AppContext)

   const cssDrawer = theme === "light" ? styles.DrawerLight : styles.DrawerDark;
   const cssIsOpen = isDrawerOpen ? styles.open : styles.closed;
   return (
      <nav className={[cssDrawer, cssIsOpen].join(' ')}>
         <NavLink
            className={styles.link}
            activeClassName={styles.navListItemActive}
            onClick={isDrawerOpenHandler}
            exact
            to="/"
         >
            {textContent.navigation[3]}
         </NavLink>

         <NavLink
            className={styles.link}
            activeClassName={styles.navListItemActive}
            onClick={isDrawerOpenHandler}
            exact
            to="/settings"
         >
            {textContent.navigation[4]}
         </NavLink>

         <NavLink
            className={styles.link}
            activeClassName={styles.navListItemActive}
            onClick={isDrawerOpenHandler}
            exact
            to="/info"
         >

            {textContent.navigation[5]}
         </NavLink>
      </nav >
   )
}

export default Drawer
