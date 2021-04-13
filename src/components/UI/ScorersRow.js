import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import styles from "./ScorersRow.module.scss";

const ageCalculator = (date) => {
   const difference = Date.now() - date;
   const age = new Date(difference);
   return Math.abs(age.getUTCFullYear() - 1970);
};

const ScorersRow = ({ player, position }) => {
   const { theme } = useContext(AppContext);
   const themeItem =
      theme === "light" ? styles.ScorersRowLight : styles.ScorersRowDark;

   const birth = Date.parse(player.player.dateOfBirth);
   const age = ageCalculator(birth);
   const imgSrc = "https://crests.football-data.org/";
   return (
      <div className={themeItem}>
         <span>{player.numberOfGoals}</span>
         <span>{player.player.name}</span>
         <span>{age}</span>
         <span>{player.player.nationality}</span>
         <span>
         <img src={`${imgSrc}${player.team.id}.svg`} alt="logo"/>
            {player.team.name}
         </span>
      </div>
   );
};

export default ScorersRow;
