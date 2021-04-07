import React from 'react'
import styles from "./SwitchButton.module.scss";

const SwitchButton = ({ onClick, theme, position }) => {
   let themeCSS, positionCSS;

   theme === "light" ? themeCSS = styles.SwitchButtonLight : themeCSS = styles.SwitchButtonDark;

   position === "left" ? positionCSS = styles.left : positionCSS = styles.right

   return (
      <div
         className={[themeCSS, positionCSS].join(' ')}
         onClick={onClick}
      />
   )
}

export default SwitchButton
