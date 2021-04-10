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
   const disableArrow = (
      <div
         className={styles.arrowBox}
      >
         <RiArrowRightSLine className={styles.disable} />
      </div>
   )

   return direction === "left" ? leftArrow : rightArrow;
}

export default Arrow
