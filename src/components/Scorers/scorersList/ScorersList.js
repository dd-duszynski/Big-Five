import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../context/context";
import styles from "./ScorersList.module.scss";
import Spinner from "../../UI/Spinner";
import ScorersRow from "../../UI/ScorersRow";
import ScorersRowHeader from "../../UI/ScorersRowHeader";
import LinkToHome from "../../UI/LinkToHome";
import MainBar from "../../MainBar/MainBar";
import Pagination from "../../Pagination/Pagination";
import { sortHandler } from "../../Util/ScorersSortHandler"
import { nationalityTranslator } from "../../Util/nationalityTranslator"

const ScorersList = ({ scorers, league }) => {
   const { language } = useContext(AppContext);
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

   const scorersWithAdditionalKeys = [...scorers];
   scorersWithAdditionalKeys.forEach((el, ind) => {
      el.position = ind + 1
      el.player.nationalityPL = nationalityTranslator(el.player.nationality)
   })

   useEffect(() => {
      setArrayToShow(sortHandler(scorersWithAdditionalKeys, sortBy, sortWay, language));
      setSortBy("position");
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [scorers]);

   useEffect(() => {
      setArrayToShow(sortHandler(scorersWithAdditionalKeys, sortBy, sortWay, language));
      setPage(1)
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
                  <ScorersRow key={`${item.player.name}-${id}`} player={item} />
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
         <LinkToHome />
      </div>
   );
};
export default ScorersList;
