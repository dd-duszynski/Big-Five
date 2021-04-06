import React from "react";
import styles from "./TableRow.module.scss";

const TableRow = ({ heading, position, teamName, playedGames, won, draw, lost, goalsFor, goalsAgainst, points }) => {
   const tableHeading = (
      <thead>
         <tr className={styles.tableHeading}>
            <th>{position}</th>
            <th>{teamName}</th>
            <th>{playedGames}</th>
            <th>{won}</th>
            <th>{draw}</th>
            <th>{lost}</th>
            <th>{goalsFor}</th>
            <th>{points}</th>
         </tr>
      </thead>
   );

   const tableRowItems = (
      <tbody>
         <tr className={styles.tableRowItems}>
            <td>{position}</td>
            <td>{teamName}</td>
            <td>{playedGames}</td>
            <td>{won}</td>
            <td>{draw}</td>
            <td>{lost}</td>
            <td>
               {goalsFor} - {goalsAgainst}{" "}
            </td>
            <td>{points}</td>
         </tr>
      </tbody>
   );

   return heading ? tableHeading : tableRowItems;
};

export default TableRow;
