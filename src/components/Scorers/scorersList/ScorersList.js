import React, { useState } from "react";
import styles from "./ScorersList.module.scss";
import Spinner from "../../UI/Spinner";
import ScorersRow from "../../UI/ScorersRow";
import ScorersRowHeader from "../../UI/ScorersRowHeader";
import MainBar from "../../MainBar/MainBar";
import Pagination from "../../Pagination/Pagination";

const ScorersList = ({ scorers, league }) => {
   const [page, setPage] = useState(1);
   const lastElement = page * 10;
   const firstElement = lastElement - 10;
   const scorersWithPosition = [...scorers]
   scorersWithPosition.forEach((el, ind) => el.position = ind + 1)
   
   let scorersToShow;
   if (scorers && page === 1) {
      scorersToShow = scorersWithPosition.filter((_, id) => id < page * 10);
   } else if (scorers && page > 1) {
      scorersToShow = scorersWithPosition.filter((_, id) => id >= firstElement && id < lastElement);
   }

   const paginate = (pageNr) => {
      setPage(pageNr);
   };

   return (
      <div className={styles.scorers}>
         <MainBar league={league} noClick />
         <div className={styles.container}>
            <ScorersRowHeader />
            {scorersToShow ? (
               scorersToShow.map((item, id) => (
                  <ScorersRow key={item.player.name} player={item} position={id + 1} />
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
