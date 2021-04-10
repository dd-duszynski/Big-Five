import React, { useContext } from "react";
import styles from "./Pagination.module.scss";
import { AppContext } from "../../context/context"
import Arrow from "../UI/Arrow"

const Pagination = ({ elementsPerPage, allElements, paginate, currentPage }) => {
   const { theme } = useContext(AppContext)
   const pageNumber = [];

   for (let i = 1; i <= Math.ceil(allElements / elementsPerPage); i++) {
      pageNumber.push(i);
   }

   const arrowClickHandler = (direction, elements) => {
      if (direction === "left" && currentPage === 1) {
         return
      } else if (direction === "left" && currentPage > 1) {
         paginate(currentPage - 1)
      } else if (direction === "right" && currentPage === elements) {
         return
      } else if (direction === "right" && currentPage < elements) {
         paginate(currentPage + 1)
      }
   }

   const css = theme === "light" ? styles.PaginationLight : styles.PaginationDark

   return (
      <nav className={css}>
         <Arrow
            direction="left"
            onClick={() => arrowClickHandler('left', pageNumber.length)}
            disable={currentPage === 1}
         />

         <ul className={styles.list}>
            {pageNumber.map((nr) => (
               <li
                  key={nr}
                  onClick={() => paginate(nr)}
                  className={currentPage === nr ? [styles.number, styles.activeNumber].join(" ") : styles.number}
               >
                  {nr}
               </li>
            ))}
         </ul>

         <Arrow
            direction="right"
            onClick={() => arrowClickHandler('right', pageNumber.length)}
            disable={currentPage === pageNumber.length}
         />
      </nav>
   );
}

export default Pagination;
