import React from 'react'
import { RiArrowUpSLine } from "react-icons/ri";
import styles from './SortIcon.module.scss'

const SortIcon = ({ id, sortBy, sortWay }) => {
   let renderResult
   if (id === sortBy && sortWay[sortBy] === "asc") {
      renderResult = (
         <div className={styles.iconBox}>
            <RiArrowUpSLine className={styles.arrowDesc} />
         </div>
      )
   } else if (id === sortBy && sortWay[sortBy] === "desc") {
      renderResult = (
         <div className={styles.iconBox}>
            <RiArrowUpSLine className={styles.arrowAsc} />
         </div>
      );
   }
   return sortBy === id ? renderResult : null
}

export default SortIcon
