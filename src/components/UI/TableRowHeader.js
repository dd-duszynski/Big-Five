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
				{textContent.table[0]}
				{icon("position")}
			</span>
			<span onClick={() => clickHandler("teamName")}>
				{textContent.table[1]}
				{icon("teamName")}
			</span>
			<span onClick={() => clickHandler("playedGames")}>
				{textContent.table[2]}
				{icon("playedGames")}
			</span>
			<span onClick={() => clickHandler("won")}>
				{textContent.table[3]}
				{icon("won")}
			</span>
			<span onClick={() => clickHandler("draw")}>
				{textContent.table[4]}
				{icon("draw")}
			</span>
			<span onClick={() => clickHandler("lost")}>
				{textContent.table[5]}
				{icon("lost")}
			</span>
			<span onClick={() => clickHandler("goalsFor")}>
				{textContent.table[6]}
				{icon("goalsFor")}
			</span>
			<span onClick={() => clickHandler("goalsAgainst")}>
				{textContent.table[7]}
				{icon("goalsAgainst")}
			</span>
			<span onClick={() => clickHandler("points")}>
				{textContent.table[8]}
				{icon("points")}
			</span>
			<span>{textContent.table[9]}</span>
		</div>
	);
};

export default TableRowHeader;
