import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import styles from "./TableRow.module.scss";

//dodaj forme, ostatnie 5 spotkań

const TableRow = ({ scores, position }) => {
   const { theme } = useContext(AppContext);
	let themeItem;
	if (theme === "light") {
		themeItem = styles.miniTableItemLight;
	} else {
		themeItem = styles.miniTableItemDark;
	}
	return (
		<div className={themeItem}>
			<span>{scores.results.standings[0].table[position].position}</span>
			<span>
				<img
					src={
						scores.results.standings[0].table[position].team
							.crestUrl
					}
					alt="logo"
				/>
				{scores.results.standings[0].table[position].team.name}
			</span>
			<span>
				{scores.results.standings[0].table[position].playedGames}
			</span>
			<span>{scores.results.standings[0].table[position].won}</span>
			<span>{scores.results.standings[0].table[position].draw}</span>
			<span>{scores.results.standings[0].table[position].lost}</span>
			<span>
				{scores.results.standings[0].table[position].goalsFor} -{" "}
				{scores.results.standings[0].table[position].goalsAgainst}{" "}
			</span>
			<span>{scores.results.standings[0].table[position].points}</span>
		</div>
	);
};

export default TableRow;
