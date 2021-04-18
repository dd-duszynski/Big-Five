import React, { useState, useEffect } from "react";
import { getResults } from "../../api/footballApi";
import { LEAGUES } from "../../content/LEAGUES";
import ResultsList from "./ResultsList/ResultsList";
import Spinner from "../UI/Spinner";

const Results = (props) => {
   const [matches, setMatches] = useState(null);
   const [round, setRound] = useState(1);
   const [rounds, setRounds] = useState(null);

   useEffect(() => {
      loadData();
   }, [props.match.params.id]);

   const loadData = () => {
      getResults(props.match.params.id).then((results) => {
         // const matchDays = results.matches.reduce((previousValue, currentValue) => {
         //    previousValue[currentValue.matchday] = true;
         //    return previousValue;
         // }, {});
         // const matchDaysRounds = Object.keys(matchDays).sort((a, b) => a - b);
         const matchDays = results.matches.reduce((prevValue, currentValue) => {
            if (prevValue.find(item => item == currentValue.matchday)) {
               return prevValue
            } else {
               prevValue.push(currentValue.matchday)
            }
            return prevValue;
         }, [1]);
         const matchDaysRounds = matchDays.sort((a, b) => a - b);
         setRounds(matchDaysRounds);
         setRound(results.matches[0].season.currentMatchday)
         setMatches(results);
      });
   };

   const onRoundChange = (newRound) => {
      const newRoundNr = parseInt(newRound);
      if (round !== newRound) {
         setRound(newRoundNr);
      }
   };

   const league = LEAGUES.find((item) => item.id === props.match.params.id);

   if (!matches) {
      return <Spinner />;
   }

   return (
      <ResultsList
         onRoundChange={onRoundChange}
         matches={matches}
         rounds={rounds}
         league={league}
         round={round}
      />
   );
};

export default Results;
