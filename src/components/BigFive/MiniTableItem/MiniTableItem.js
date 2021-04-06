import React, { useContext } from "react";
import styles from "./MiniTableItem.module.scss";
import { AppContext } from "../../../context/context";

export const MiniTableItem = ({ scores, position, heading }) => {
   let themeHeading, themeItem;
   const { textContent, theme } = useContext(AppContext);

   theme === "light" ? (themeHeading = styles.miniTableHeading) : (themeHeading = styles.miniTableHeadingDark);

   theme === "light" ? (themeItem = styles.miniTableItem) : (themeItem = styles.miniTableItemDark);

   const miniTableHeading = (
      <thead>
         <tr className={themeHeading}>
            <th>{textContent.table[0]}</th>
            <th>{textContent.table[1]}</th>
            <th>{textContent.table[2]}</th>
            <th>{textContent.table[3]}</th>
            <th>{textContent.table[4]}</th>
            <th>{textContent.table[5]}</th>
            <th>{textContent.table[6]}</th>
            <th>{textContent.table[7]}</th>
         </tr>
      </thead>
   );
   const miniTableItem = (
      <tbody>
         <tr className={themeItem}>
            <td>{scores.results.standings[0].table[position].position}</td>
            <td>{scores.results.standings[0].table[position].team.name}</td>
            <td>{scores.results.standings[0].table[position].playedGames}</td>
            <td>{scores.results.standings[0].table[position].won}</td>
            <td>{scores.results.standings[0].table[position].draw}</td>
            <td>{scores.results.standings[0].table[position].lost}</td>
            <td>
               {scores.results.standings[0].table[position].goalsFor} - {scores.results.standings[0].table[position].goalsAgainst}{" "}
            </td>
            <td>{scores.results.standings[0].table[position].points}</td>
         </tr>
      </tbody>
   );
   return heading ? miniTableHeading : miniTableItem;
};
