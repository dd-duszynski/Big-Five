import React, { useState, useEffect } from "react";
import styles from "./LeagueScores.module.scss";
import MiniTable from "../MiniTable/MiniTable";
import { getStandings } from "../../../api/footballApi";
import FlagIcon from "../../FlagIcon/FlagIcon";
import { AppContext } from "../../../context/context";

const LeagueScores = (props) => {
   const [results, setResults] = useState(null)
   const { theme } = AppContext

   useEffect(() => {
      loadData()
   }, [])

   const loadData = () => {
      getStandings(props.league.id).then(results => setResults({ results }));
   }

   const toogleResults = () => {
      props.onToggle(props.league.id);
   }

   const renderResults = () => {
      return <MiniTable scores={results} />
   }
   const css = theme === "light" ? styles.LeagueScores : styles.LeagueScoresDark;

   return (
      <>
         <div className={css} onClick={() => toogleResults()}>
            <FlagIcon id={props.league.id} />
            <h2 className={styles.LeagueScores_heading}>
               {props.league.name}
            </h2>
         </div>
         {props.expanded === true && renderResults()}
      </>
   );
}

export default LeagueScores;
