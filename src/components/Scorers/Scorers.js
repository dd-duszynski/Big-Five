import React, { useState, useEffect } from "react";
import { LEAGUES } from "../../content/LEAGUES";
import { getScorers } from "../../api/footballApi";
import ScorersList from "./scorersList/ScorersList";

//dodaj paginacje

const Scorers = (props) => {
   const [scorers, setScorers] = useState(null);
   console.log(scorers);
   useEffect(() => {
      loadData();
   }, [props.match.params.id]);

   const loadData = () => {
      setScorers(null)
      getScorers(props.match.params.id)
         .then((results) =>
            setScorers(results.scorers)
         )
   };

   const league = LEAGUES.find(
      (item) => item.id === props.match.params.id
   );

   return <ScorersList league={league} scorers={scorers} />;
};

export default Scorers;
