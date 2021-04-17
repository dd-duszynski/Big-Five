import React, { useState, useEffect } from "react";
import styles from "./ScorersList.module.scss";
import Spinner from "../../UI/Spinner";
import ScorersRow from "../../UI/ScorersRow";
import ScorersRowHeader from "../../UI/ScorersRowHeader";
import MainBar from "../../MainBar/MainBar";
import Pagination from "../../Pagination/Pagination";
import { sortHandler } from "../../Util/ScorersSortHandler"

const ScorersList = ({ scorers, league }) => {
   const [arrayToShow, setArrayToShow] = useState(null);
   const [page, setPage] = useState(1);
   const [sortBy, setSortBy] = useState("position");
   const [sortWay, setSortWay] = useState({
      position: "desc",
      goals: "asc",
      player: "asc",
      age: "asc",
      nationality: "asc",
      teamName: "asc"
   });

   const scorersWithPosition = [...scorers];
   scorersWithPosition.forEach((el, ind) => el.position = ind + 1)

   useEffect(() => {
      setArrayToShow(sortHandler(scorersWithPosition, sortBy, sortWay));
      setSortBy("position");
   }, [scorers]);

   useEffect(() => {
      setArrayToShow(sortHandler(scorersWithPosition, sortBy, sortWay));
      setPage(1)
   }, [sortBy, sortWay]);

   const lastElement = page * 10;
   const firstElement = lastElement - 10;

   let scorersToShow;
   if (arrayToShow && page === 1) {
      scorersToShow = arrayToShow.filter((_, id) => id < page * 10);
   } else if (arrayToShow && page > 1) {
      scorersToShow = arrayToShow.filter((_, id) => id >= firstElement && id < lastElement);
   }

   const paginate = (pageNr) => {
      setPage(pageNr);
   };

   return (
      <div className={styles.scorers}>
         <MainBar league={league} noClick />
         <div className={styles.container}>
            <ScorersRowHeader
               sortBy={sortBy}
               sortWay={sortWay}
               setSortBy={setSortBy}
               setSortWay={setSortWay}
            />
            {scorersToShow ? (
               scorersToShow.map((item, id) => (
                  <ScorersRow key={item.player.name} player={item} />
               ))
            ) : (
                  <Spinner />
               )}
         </div>
         <Pagination
            currentPage={page}
            elementsPerPage={10}
            allElements={scorers.length}
            paginate={paginate}
         />
      </div>
   );
};
export default ScorersList;




// import React, { useState } from "react";
// import styles from "./ScorersList.module.scss";
// import Spinner from "../../UI/Spinner";
// import ScorersRow from "../../UI/ScorersRow";
// import ScorersRowHeader from "../../UI/ScorersRowHeader";
// import MainBar from "../../MainBar/MainBar";
// import Pagination from "../../Pagination/Pagination";

// const ScorersList = ({ scorers, league }) => {
//    const [page, setPage] = useState(1);

//    const lastElement = page * 10;
//    const firstElement = lastElement - 10;
//    const scorersWithPosition = [...scorers];
//    scorersWithPosition.forEach((el, ind) => el.position = ind + 1)
//    let scorersToShow;
//    if (scorers && page === 1) {
//       scorersToShow = scorersWithPosition.filter((_, id) => id < page * 10);
//    } else if (scorers && page > 1) {
//       scorersToShow = scorersWithPosition.filter((_, id) => id >= firstElement && id < lastElement);
//    }


//    const paginate = (pageNr) => {
//       setPage(pageNr);
//    };

//    return (
//       <div className={styles.scorers}>
//          <MainBar league={league} noClick />
//          <div className={styles.container}>
//             <ScorersRowHeader/>
//             {scorersToShow ? (
//                scorersToShow.map((item, id) => (
//                   <ScorersRow key={item.player.name} player={item} position={id + 1} />
//                ))
//             ) : (
//                   <Spinner />
//                )}
//          </div>
//          <Pagination
//             currentPage={page}
//             elementsPerPage={10}
//             allElements={scorers.length}
//             paginate={paginate}
//          />
//       </div>
//    );
// };
// export default ScorersList;
