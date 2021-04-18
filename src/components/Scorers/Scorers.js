import React, { useState, useEffect } from "react";
import { LEAGUES } from "../../content/LEAGUES";
import { getScorers } from "../../api/footballApi";
import ScorersList from "./ScorersList/ScorersList";
import Spinner from "../UI/Spinner";

const Scorers = (props) => {
   const [scorers, setScorers] = useState(null);

   useEffect(() => {
      loadData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
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

   if (!scorers) {
      return <Spinner />;
   }

   return <ScorersList league={league} scorers={scorers} />;
};

export default Scorers;
