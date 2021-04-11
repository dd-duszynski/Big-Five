import React from "react";
import styles from "./MiniTable.module.scss";
import TableRow from "../../UI/TableRow";
import TableRowHeader from "../../UI/TableRowHeader";
import useSort from "../../../hooks/useSort"

const MiniTable = ({ scores }) => {
   const [
      arrayToShow,
      sortBy,
      setSortBy,
      sortWay,
      setSortWay] = useSort(scores.results.standings[0].table.slice(0, 5), scores)

   return (
      <div className={styles.MiniTable}>
         <TableRowHeader
            sortBy={sortBy}
            sortWay={sortWay}
            setSortBy={setSortBy}
            setSortWay={setSortWay}
         />
         {arrayToShow.map((_, index) => (
            <TableRow scores={arrayToShow} position={index} key={index} />
         ))}
      </div>
   );
};

export default MiniTable;