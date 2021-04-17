import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import styles from "./ScorersRowHeader.module.scss";
import SortIcon from "../UI/SortIcon"

const ScorersRowHeader = ({ sortBy, sortWay, setSortBy, setSortWay }) => {
   const { textContent, theme } = useContext(AppContext);

   const clickHandler = (key) => {
      setSortBy(key);
      if (sortWay[key] === "asc") {
         setSortWay({
            ...sortWay,
            [key]: "desc",
         });
      } else if (sortWay[key] === "desc") {
         setSortWay({
            ...sortWay,
            [key]: "asc",
         });
      }
   };

   const themeHeading =
      theme === "light"
         ? styles.ScorersRowHeaderLight
         : styles.ScorersRowHeaderDark;

   return (
      <div className={themeHeading}>
         <span onClick={() => clickHandler("position")}>
            #
            <SortIcon id="position" sortBy={sortBy} sortWay={sortWay} />
         </span>
         <span onClick={() => clickHandler("goals")}>
            {textContent.scorers.goals}
            <SortIcon id="goals" sortBy={sortBy} sortWay={sortWay} />
         </span>
         <span onClick={() => clickHandler("player")}>
            {textContent.scorers.player}
            <SortIcon id="player" sortBy={sortBy} sortWay={sortWay} />
         </span>
         <span onClick={() => clickHandler("age")}>
            {textContent.scorers.age}
            <SortIcon id="age" sortBy={sortBy} sortWay={sortWay} />
         </span>
         <span onClick={() => clickHandler("nationality")}>
            {textContent.scorers.nationality}
            <SortIcon id="nationality" sortBy={sortBy} sortWay={sortWay} />
         </span>
         <span onClick={() => clickHandler("teamName")}>
            {textContent.scorers.team}
            <SortIcon id="teamName" sortBy={sortBy} sortWay={sortWay} />
         </span>
      </div>
   );
};

export default ScorersRowHeader;
