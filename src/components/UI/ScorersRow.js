import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import styles from "./ScorersRow.module.scss";

const ScorersRow = ({ player }) => {
   const { theme } = useContext(AppContext);

   const themeItem = theme === "light" ? styles.ScorersRowLight : styles.ScorersRowDark;

   return (
      <div className={themeItem}>
         <span>{player.numberOfGoals}</span>
         <span>{player.player.name}</span>
         <span>{player.team.name}</span>
      </div>
   );
};

export default ScorersRow;
