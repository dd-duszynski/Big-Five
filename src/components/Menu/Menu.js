import React, { useContext } from "react";
import styles from "./Menu.module.scss";
import { LEAGUES } from "../../content/LEAGUES";
import MenuItem from "./MenuItem/MenuItem";
import { AppContext } from "../../context/context";

const Menu = () => {
   const { theme } = useContext(AppContext);

   let css;
   theme === "light" ? (css = styles.menuLight) : (css = styles.menuDark);

   return (
      <div className={css}>
         <nav className={styles.nav}>
            {LEAGUES.map((item) => (
               <MenuItem
                  key={item.name}
                  league={item.name}
                  id={item.id}
               />
            ))}
         </nav>
      </div>
   );
};

export default Menu;
