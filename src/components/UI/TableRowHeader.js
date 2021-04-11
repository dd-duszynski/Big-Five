import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import styles from "./TableRowHeader.module.scss";
import { RiArrowUpSLine } from "react-icons/ri";

const TableRowHeader = ({ sortBy, sortWay, setSortBy, setSortWay }) => {
   const { textContent, theme } = useContext(AppContext);

   const clickHandler = (key) => {
      setSortBy(key)
      if (sortWay[key] === "asc") {
         setSortWay({
            ...sortWay,
            [key]: "desc"
         })
      } else if (sortWay[key] === "desc") {
         setSortWay({
            ...sortWay,
            [key]: "asc"
         })
      }
   }

   let themeHeading;
   if (theme === "light") {
      themeHeading = styles.miniTableHeadingLight;
   } else {
      themeHeading = styles.miniTableHeadingDark;
   }

   const icon = (id) => {
      if (id === sortBy && sortWay[sortBy] === "asc") {
         return <RiArrowUpSLine className={styles.arrowDesc} />
      } else if (id === sortBy && sortWay[sortBy] === "desc") {
         return <RiArrowUpSLine className={styles.arrowAsc} />
      }
   }

   return (
      <div className={themeHeading}>
         <span
            onClick={() => clickHandler('position')}
         >
            {textContent.table[0]}
            {icon('position')}
         </span>
         <span
            onClick={() => clickHandler('teamName')}
         >
            {textContent.table[1]}
            {icon('teamName')}
         </span>
         <span
            onClick={() => clickHandler('playedGames')}
         >
            {textContent.table[2]}
            {icon('playedGames')}
         </span>
         <span
            onClick={() => clickHandler('won')}
         >
            {textContent.table[3]}
            {icon('won')}
         </span>
         <span
            onClick={() => clickHandler('draw')}
         >
            {textContent.table[4]}
            {icon('draw')}
         </span>
         <span
            onClick={() => clickHandler('lost')}
         >
            {textContent.table[5]}
            {icon('lost')}
         </span>
         <span
            onClick={() => clickHandler('goalDifference')}
         >
            {textContent.table[6]}
            {icon('goalDifference')}
         </span>
         <span
            onClick={() => clickHandler('points')}
         >
            {textContent.table[7]}
            {icon('points')}
         </span>
         <span>{textContent.table[8]}</span>
      </div>
   );
};

export default TableRowHeader;
