import React, { useContext } from "react";
import styles from "./ScorersList.module.scss";
import ScorerRow from "./scorerRow/ScorerRow";
import FlagIcon from "../../FlagIcon/FlagIcon";
import { AppContext } from "../../../context/context";
import Spinner from '../../UI/Spinner'

const ScorersList = ({ scorers, league }) => {
   const { textContent } = useContext(AppContext);
   console.log(scorers);
   return (
      <div className={styles.scorers}>
         <div className={styles.scorersHeader}>
            <FlagIcon id={league.id} />
            <h2>
               {league.name}: {textContent.scorers[0]}
            </h2>
         </div>
         <table>
            <ScorerRow
               heading
               numberOfGoals={textContent.scorers[1]}
               player={textContent.scorers[2]}
               team={textContent.scorers[3]}
            />
            {scorers ? scorers.map(item => (
               <ScorerRow
                  numberOfGoals={item.numberOfGoals}
                  player={item.player.name}
                  team={item.team.name}
                  key={item.player.name}
               />
            )) : <Spinner />}
         </table>
      </div>
   )
};
export default ScorersList;
