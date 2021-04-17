import React, { useContext } from "react";
import styles from "./Info.module.scss";
import { AppContext } from "../../context/context";
import { FaDatabase, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Info = () => {
   const { textContent, theme } = useContext(AppContext);
   const css = theme === "light" ? styles.InfoLight : styles.InfoDark
   return (
      <ul className={css}>
         <li className={styles.infoItem}>
            <a
               className={styles.link}
               href={textContent.info.database[1]}
               target="_blank"
               rel="noreferrer"
            >
               <FaDatabase className={styles.icon} />
               {textContent.info.database[0]}
            </a>
         </li>
         <div className={styles.line} />
         <li className={styles.infoItem}>
            <a
               className={styles.link}
               href={textContent.info.mail[1]}
            >
               <MdMail className={styles.icon} />
               {textContent.info.mail[0]}
            </a>
         </li>
         <div className={styles.line} />
         <li className={styles.infoItem}>
            <a
               className={styles.link}
               href={textContent.info.linkedin[1]}
               target="_blank"
               rel="noreferrer"
            >
               <FaLinkedin className={styles.icon} />
               {textContent.info.linkedin[0]}
            </a>
         </li>
      </ul>
   );
};

export default Info;
