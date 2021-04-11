import React from "react";
import styles from "./TableList.module.scss";
import TableRow from "../../UI/TableRow";
import TableRowHeader from "../../UI/TableRowHeader";
import MainBar from "../../MainBar/MainBar";
import useSort from "../../../hooks/useSort"

const TableList = ({ scores, league }) => {
   const [
      arrayToShow,
      sortBy,
      setSortBy,
      sortWay,
      setSortWay] = useSort(scores.results.standings[0].table, scores)

   return (
      <div className={styles.TableList}>
         <MainBar league={league} noClick />
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

export default TableList;



// import React, { useEffect, useState } from "react";
// import styles from "./TableList.module.scss";
// import TableRow from "../../UI/TableRow";
// import TableRowHeader from "../../UI/TableRowHeader";
// import MainBar from "../../MainBar/MainBar";
// import useSort from "../../../hooks/useSort"

// const TableList = ({ scores, league }) => {
//    const [arrayToShow, setArrayToShow] = useState(scores.results.standings[0].table)
//    const [sortBy, setSortBy] = useState(null)
//    const [sortWay, setSortWay] = useState({
//       position: "desc",
//       teamName: "desc",
//       playedGames: "asc",
//       won: "asc",
//       draw: "asc",
//       lost: "asc",
//       goalDifference: "asc",
//       points: "asc"
//    })

//    const sortHandler = (arr, sortBy, sortWay) => {
//       const initialArr = [...arr];
//       if (sortBy === "teamName") {
//          if (sortWay[sortBy] === "asc") {
//             initialArr.sort((a, b) => {
//                return ('' + a.team.name).localeCompare(b.team.name)
//             })
//          } else {
//             initialArr.sort((a, b) => {
//                return ('' + b.team.name).localeCompare(a.team.name)
//             })
//          }
//       } else {
//          initialArr.sort((a, b) => {
//             return sortWay[sortBy] === "asc" ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy];
//          })
//       }
//       return initialArr
//    }

//    useEffect(() => {
//       setArrayToShow(scores.results.standings[0].table)
//       setSortBy(null)
//    }, [scores])

//    useEffect(() => {
//       setArrayToShow(sortHandler(arrayToShow, sortBy, sortWay))
//    }, [sortBy, sortWay])

//    return (
//       <div className={styles.TableList}>
//          <MainBar league={league} noClick />
//          <TableRowHeader
//             sortBy={sortBy}
//             sortWay={sortWay}
//             setSortBy={setSortBy}
//             setSortWay={setSortWay}
//          />
//          {arrayToShow.map((_, index) => (
//             <TableRow scores={arrayToShow} position={index} key={index} />
//          ))}
//       </div>
//    );
// };

// export default TableList;
