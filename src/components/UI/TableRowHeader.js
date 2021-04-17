import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import styles from "./TableRowHeader.module.scss";
import { RiArrowUpSLine } from "react-icons/ri";

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

	const icon = (id) => {
		if (id === sortBy && sortWay[sortBy] === "asc") {
			return (
				<div className={styles.iconBox}>
					<RiArrowUpSLine className={styles.arrowDesc} />
				</div>
			);
		} else if (id === sortBy && sortWay[sortBy] === "desc") {
			return (
				<div className={styles.iconBox}>
					<RiArrowUpSLine className={styles.arrowAsc} />
				</div>
			);
		}
	};

	return (
		<div className={themeHeading}>
			<span onClick={() => clickHandler("position")}>
				{textContent.table.position}
				{icon("position")}
			</span>
			<span onClick={() => clickHandler("teamName")}>
				{textContent.table.teamName}
				{icon("teamName")}
			</span>
			<span onClick={() => clickHandler("playedGames")}>
				{textContent.table.playedGames}
				{icon("playedGames")}
			</span>
			<span onClick={() => clickHandler("won")}>
				{textContent.table.won}
				{icon("won")}
			</span>
			<span onClick={() => clickHandler("draw")}>
				{textContent.table.draw}
				{icon("draw")}
			</span>
			<span onClick={() => clickHandler("lost")}>
				{textContent.table.lost}
				{icon("lost")}
			</span>
			<span onClick={() => clickHandler("goalsFor")}>
				{textContent.table.goalsFor}
				{icon("goalsFor")}
			</span>
			<span onClick={() => clickHandler("goalsAgainst")}>
				{textContent.table.goalsAgainst}
				{icon("goalsAgainst")}
			</span>
			<span onClick={() => clickHandler("points")}>
				{textContent.table.points}
				{icon("points")}
			</span>
			<span>{textContent.table.form}</span>
		</div>
	);
};

export default TableRowHeader;
