import React, { useContext } from "react";
import styles from "./TableList.module.scss";
import FlagIcon from "../../FlagIcon/FlagIcon";
import TableRow from "./tableRow/TableRow";
import { AppContext } from "../../../context/context";

const TableList = ({ scores, league }) => {
   const { textContent } = useContext(AppContext);

   return (
      scores && (
         <div className={styles.table}>
            <div className={styles.table_mainHeader}>
               <FlagIcon id={league.id} />
               <h2>
                  {league.name}: {textContent.navigation[1]}
               </h2>
            </div>
            <table>
               <TableRow
                  heading
                  position={textContent.table[0]}
                  teamName={textContent.table[1]}
                  playedGames={textContent.table[2]}
                  won={textContent.table[3]}
                  draw={textContent.table[4]}
                  lost={textContent.table[5]}
                  goalsFor={textContent.table[6]}
                  points={textContent.table[7]}
               />
               {scores.results.standings[0].table.map(item => (
                  <TableRow
                     position={item.position}
                     teamName={item.team.name}
                     playedGames={item.playedGames}
                     won={item.won}
                     draw={item.draw}
                     lost={item.lost}
                     goalsFor={item.goalsFor}
                     goalsAgainst={item.goalsAgainst}
                     points={item.points}
                     key={item.team.name}
                  />
               ))}
            </table>
         </div>
      )
   );
};
export default TableList;
