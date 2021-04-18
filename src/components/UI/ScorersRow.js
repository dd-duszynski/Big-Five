import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import styles from "./ScorersRow.module.scss";
import { ageCalculator } from "../Util/ageCalculator"

const ScorersRow = ({ player }) => {
   const { theme, language } = useContext(AppContext);
   const themeItem =
      theme === "light" ? styles.ScorersRowLight : styles.ScorersRowDark;

   const birth = Date.parse(player.player.dateOfBirth);
   const age = ageCalculator(birth);
   const imgSrc = "https://crests.football-data.org/";

   let nationality
   if (language === "PL") {
      nationality = player.player.nationalityPL
   } else {
      nationality = player.player.nationality
   }

   return (
      <div className={themeItem}>
         <span>{player.position}</span>
         <span>{player.numberOfGoals}</span>
         <span>{player.player.name}</span>
         <span>{age}</span>
         <span>{nationality}</span>
         <span>
            <img src={`${imgSrc}${player.team.id}.svg`} alt="logo" />
            {player.team.name}
         </span>
      </div>
   );
};

export default ScorersRow;
