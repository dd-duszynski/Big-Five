import React from 'react'
import styles from './Arrow.module.scss'

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Arrow = ({ direction, onClick, disable }) => {
   const leftArrow = (
      <div
         className={styles.arrowBox}
         onClick={onClick}
      >
         <RiArrowLeftSLine className={styles.arrowIcon} />
      </div>
   )

   const rightArrow = (
      <div
         className={styles.arrowBox}
         onClick={onClick}
      >
         <RiArrowRightSLine className={styles.arrowIcon} />
      </div>
   )
   const disableLeftArrow = (
      <div
         className={styles.disableArrowBox}
      >
         <RiArrowLeftSLine className={styles.disable} />
      </div>
   )
   const disableRightArrow = (
      <div
         className={styles.disableArrowBox}
      >
         <RiArrowRightSLine className={styles.disable} />
      </div>
   )

   if (disable && direction === "left") {
      return disableLeftArrow
   } else if (disable && direction === "right") {
      return disableRightArrow
   }
   
   return direction === "left" ? leftArrow : rightArrow;
}

export default Arrow
