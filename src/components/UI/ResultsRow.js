import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import styles from "./ResultsRow.module.scss";


const ResultsRow = ({ result }) => {
   const { theme } = useContext(AppContext);
   const themeItem =
      theme === "light" ? styles.ResultsRowLight : styles.ResultsRowDark;
   const homeTeamScore = result.score.fullTime.homeTeam !== null ? result.score.fullTime.homeTeam : "";
   const awayTeamScore = result.score.fullTime.awayTeam !== null ? result.score.fullTime.awayTeam : "";

   return (
      <div className={themeItem}>
         <span>{result.homeTeam.name}</span>
         <span>
            {`${homeTeamScore} - ${awayTeamScore}`}
         </span>
         <span>{result.awayTeam.name}</span>
      </div>
   );
};

export default ResultsRow;
