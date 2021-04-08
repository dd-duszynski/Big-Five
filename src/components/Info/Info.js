import React, { useContext } from "react";
import styles from "./Info.module.scss";
import { AppContext } from "../../context/context";
import { FaDatabase, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Info = () => {
   const { textContent } = useContext(AppContext);

   return (
      <ul className={styles.Info}>
         <li className={styles.infoItem}>
            <a
               className={styles.link}
               href={textContent.links[0]}
               target="_blank"
               rel="noreferrer"
            >
               <FaDatabase className={styles.icon} />
               {textContent.info[0]}
            </a>
         </li>
         <div className={styles.line} />
         <li className={styles.infoItem}>
            <a
               className={styles.link}
               href={textContent.links[1]}
            >
               <MdMail className={styles.icon} />
               {textContent.info[1]}
            </a>
         </li>
         <div className={styles.line} />
         <li className={styles.infoItem}>
            <a
               className={styles.link}
               href={textContent.links[2]}
               target="_blank"
               rel="noreferrer"
            >
               <FaLinkedin className={styles.icon} />
               {textContent.info[2]}
            </a>
         </li>
      </ul>
   );
};

export default Info;
