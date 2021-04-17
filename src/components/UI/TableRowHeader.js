import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import styles from "./TableRowHeader.module.scss";
import SortIcon from "../UI/SortIcon"

const TableRowHeader = ({ sortBy, sortWay, setSortBy, setSortWay }) => {
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

   let themeHeading;
   if (theme === "light") {
      themeHeading = styles.miniTableHeadingLight;
   } else {
      themeHeading = styles.miniTableHeadingDark;
   }

   return (
      <div className={themeHeading}>
         <span onClick={() => clickHandler("position")}>
            {textContent.table.position}
            <SortIcon id="position" sortBy={sortBy} sortWay={sortWay} />
         </span>
         <span onClick={() => clickHandler("teamName")}>
            {textContent.table.teamName}
            <SortIcon id="teamName" sortBy={sortBy} sortWay={sortWay} />
         </span>
         <span onClick={() => clickHandler("playedGames")}>
            {textContent.table.playedGames}
            <SortIcon id="playedGames" sortBy={sortBy} sortWay={sortWay} />
         </span>
         <span onClick={() => clickHandler("won")}>
            {textContent.table.won}
            <SortIcon id="won" sortBy={sortBy} sortWay={sortWay} />
         </span>
         <span onClick={() => clickHandler("draw")}>
            {textContent.table.draw}
            <SortIcon id="draw" sortBy={sortBy} sortWay={sortWay} />
         </span>
         <span onClick={() => clickHandler("lost")}>
            {textContent.table.lost}
            <SortIcon id="lost" sortBy={sortBy} sortWay={sortWay} />
         </span>
         <span onClick={() => clickHandler("goalsFor")}>
            {textContent.table.goalsFor}
            <SortIcon id="goalsFor" sortBy={sortBy} sortWay={sortWay} />
         </span>
         <span onClick={() => clickHandler("goalsAgainst")}>
            {textContent.table.goalsAgainst}
            <SortIcon id="goalsAgainst" sortBy={sortBy} sortWay={sortWay} />
         </span>
         <span onClick={() => clickHandler("points")}>
            {textContent.table.points}
            <SortIcon id="points" sortBy={sortBy} sortWay={sortWay} />
         </span>
         <span>{textContent.table.form}</span>
      </div>
   );
};

export default TableRowHeader;

// import React, { useContext } from "react";
// import { AppContext } from "../../context/context";
// import styles from "./TableRowHeader.module.scss";
// import { RiArrowUpSLine } from "react-icons/ri";

// const TableRowHeader = ({ sortBy, sortWay, setSortBy, setSortWay }) => {
// 	const { textContent, theme } = useContext(AppContext);

// 	const clickHandler = (key) => {
// 		setSortBy(key);
// 		if (sortWay[key] === "asc") {
// 			setSortWay({
// 				...sortWay,
// 				[key]: "desc",
// 			});
// 		} else if (sortWay[key] === "desc") {
// 			setSortWay({
// 				...sortWay,
// 				[key]: "asc",
// 			});
// 		}
// 	};

// 	let themeHeading;
// 	if (theme === "light") {
// 		themeHeading = styles.miniTableHeadingLight;
// 	} else {
// 		themeHeading = styles.miniTableHeadingDark;
// 	}

// 	const icon = (id) => {
// 		if (id === sortBy && sortWay[sortBy] === "asc") {
// 			return (
// 				<div className={styles.iconBox}>
// 					<RiArrowUpSLine className={styles.arrowDesc} />
// 				</div>
// 			);
// 		} else if (id === sortBy && sortWay[sortBy] === "desc") {
// 			return (
// 				<div className={styles.iconBox}>
// 					<RiArrowUpSLine className={styles.arrowAsc} />
// 				</div>
// 			);
// 		}
// 	};

// 	return (
// 		<div className={themeHeading}>
// 			<span onClick={() => clickHandler("position")}>
// 				{textContent.table.position}
// 				{icon("position")}
// 			</span>
// 			<span onClick={() => clickHandler("teamName")}>
// 				{textContent.table.teamName}
// 				{icon("teamName")}
// 			</span>
// 			<span onClick={() => clickHandler("playedGames")}>
// 				{textContent.table.playedGames}
// 				{icon("playedGames")}
// 			</span>
// 			<span onClick={() => clickHandler("won")}>
// 				{textContent.table.won}
// 				{icon("won")}
// 			</span>
// 			<span onClick={() => clickHandler("draw")}>
// 				{textContent.table.draw}
// 				{icon("draw")}
// 			</span>
// 			<span onClick={() => clickHandler("lost")}>
// 				{textContent.table.lost}
// 				{icon("lost")}
// 			</span>
// 			<span onClick={() => clickHandler("goalsFor")}>
// 				{textContent.table.goalsFor}
// 				{icon("goalsFor")}
// 			</span>
// 			<span onClick={() => clickHandler("goalsAgainst")}>
// 				{textContent.table.goalsAgainst}
// 				{icon("goalsAgainst")}
// 			</span>
// 			<span onClick={() => clickHandler("points")}>
// 				{textContent.table.points}
// 				{icon("points")}
// 			</span>
// 			<span>{textContent.table.form}</span>
// 		</div>
// 	);
// };

// export default TableRowHeader;
