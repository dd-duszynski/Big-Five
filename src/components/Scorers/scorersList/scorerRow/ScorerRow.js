import React from "react";
import styles from "./ScorerRow.module.css";

const ScorerRow = ({ heading, numberOfGoals, player, team }) => {
   const scorersTableHeading = (
      <thead>
         <tr className={styles.scorersTableHeading}>
            <th>{numberOfGoals}</th>
            <th>{player}</th>
            <th>{team}</th>
         </tr>
      </thead>
   );
   const scorersTableItems = (
      <tbody>
         <tr className={styles.scorersTableItems}>
            <td>{numberOfGoals}</td>
            <td>{player}</td>
            <td>{team}</td>
         </tr>
      </tbody>
   );
   return heading ? scorersTableHeading : scorersTableItems;
};

export default ScorerRow;
