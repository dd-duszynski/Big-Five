import React from 'react'
import styles from './HamburgerMenu.module.scss'

const HamburgerMenu = ({ onClick, isDrawerOpen }) => {

   const css = isDrawerOpen ? styles.HamburgerMenuActive : styles.HamburgerMenu;
   return (
      <div className={css} onClick={onClick}>
         <div className={styles.line1} />
         <div className={styles.line2} />
         <div className={styles.line3} />
      </div>
   )
}

export default HamburgerMenu
