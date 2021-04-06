import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuFooter.module.scss";
import {AppContext} from '../../../context/context';

const MenuFooter = (props) => {
      const {theme} = AppContext
      let theme2;
      theme === "light" ? (theme2 = styles.menu_footer) : (theme2 = styles.menu_footerDark);

      return (
         <div className={theme2}>
            <NavLink
               className={styles.settings}
               activeClassName={styles.settingsActive}
               exact to="/settings"
            />
            <NavLink
               className={styles.contact}
               activeClassName={styles.contactActive}
               exact to="/contact"
            />
            <NavLink
               className={styles.info}
               activeClassName={styles.infoActive}
               exact to="/info"
            />
         </div>
      );
}

export default MenuFooter;
