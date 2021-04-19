import React, { useContext } from 'react'
import { AppContext } from "../../context/context";
import { Link } from 'react-router-dom'
import styles from './LinkToHome.module.scss';
import { BsArrowLeft } from 'react-icons/bs'

const LinkToHome = () => {
   const { theme, textContent } = useContext(AppContext);
   const css = theme === "dark" ? styles.LinkToHomeDark : styles.LinkToHomeLight;

   return (
      <div className={[styles.LinkToHome, css].join(' ')}>
         <Link to="/" className={styles.link}>
            <BsArrowLeft className={styles.icon} />
            <span>
               {textContent.backToHome}
            </span>
         </Link>
      </div>
   )
}

export default LinkToHome
