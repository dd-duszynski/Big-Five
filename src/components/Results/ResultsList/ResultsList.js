import React, { useEffect, useState } from "react";
import styles from "./ResultsList.module.scss";
import Spinner from "../../UI/Spinner";
import MainBar from "../../MainBar/MainBar";
import ResultsRowHeader from "../../UI/ResultsRowHeader";
import ResultsRow from "../../UI/ResultsRow";

const ResultsList = ({ matches, league, onRoundChange, rounds, round }) => {
   const [isLoaded, setIsLoaded] = useState(false);
   const [matchesToShow, setMatchesToShow] = useState(
      matches.matches.filter((i) => i.matchday === round)
   );
   useEffect(() => {
      setIsLoaded(false);
      setMatchesToShow(matches.matches.filter((i) => i.matchday === round));
      setIsLoaded(true);
   }, [matches, round]);

   return isLoaded ? (
      <div className={styles.ResultsList}>
         <MainBar
            league={league}
            noClick
            rounds={rounds}
            round={round}
            onRoundChange={onRoundChange}
         />
         <ResultsRowHeader />
         {matchesToShow.map((item, index) => {
            return <ResultsRow key={`matchrow_${index}`} result={item} />;
         })}
      </div>
   ) : (
      <Spinner />
   );
};

export default ResultsList;
