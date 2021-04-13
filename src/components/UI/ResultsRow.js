import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import styles from "./ResultsRow.module.scss";

const ResultsRow = ({ result }) => {
	const { theme } = useContext(AppContext);
	const themeItem =
		theme === "light" ? styles.ResultsRowLight : styles.ResultsRowDark;
	const homeTeamScore =
		result.score.fullTime.homeTeam !== null
			? result.score.fullTime.homeTeam
			: "";
	const awayTeamScore =
		result.score.fullTime.awayTeam !== null
			? result.score.fullTime.awayTeam
			: "";
	const imgSrc = "https://crests.football-data.org/";
	return (
		<div className={themeItem}>
			<span>
				{result.homeTeam.name}
				<img src={`${imgSrc}${result.homeTeam.id}.svg`} alt="logo" className={styles.imgLeft}/>
			</span>
			<span>{`${homeTeamScore} - ${awayTeamScore}`}</span>
			<span>
				<img src={`${imgSrc}${result.awayTeam.id}.svg`} alt="logo" className={styles.imgRight}/>
				{result.awayTeam.name}
			</span>
		</div>
	);
};

export default ResultsRow;
