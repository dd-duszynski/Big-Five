import React from "react";
import styles from "./BigFive.module.scss";
import LeagueScores from "./LeagueScores/LeagueScores";
import { LEAGUES } from "../../content/LEAGUES";

class BigFive extends React.Component {
   constructor(...args) {
      super(...args);
      this.state = {
         expandedTab: null
      };
   }

   onTabToggle = tabId => {
      this.setState(prevState => {
         if (tabId === prevState.expandedTab) {
            return { expandedTab: null };
         }
         return { expandedTab: tabId };
      });
   };

   render() {
      return (
         <div className={styles.big5}>
            {LEAGUES.map((item) => (
               <LeagueScores
                  expanded={this.state.expandedTab === item.id}
                  league={item}
                  key={item.id}
                  onToggle={this.onTabToggle}
               />
            ))}
         </div>
      );
   }
}

export default BigFive;
