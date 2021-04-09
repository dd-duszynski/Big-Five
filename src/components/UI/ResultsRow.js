import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import styles from "./ResultsRow.module.scss";


const ResultsRow = ({ result }) => {
	const { theme } = useContext(AppContext);
	const themeItem =
		theme === "light" ? styles.ResultsRowLight : styles.ResultsRowDark;
console.log(result);

	return (
		<div className={themeItem}>
			<span>{result.homeTeam.name}</span>
			<span>
            {`${result.score.fullTime.homeTeam} - ${result.score.fullTime.awayTeam}`}
         </span>
			<span>{result.awayTeam.name}</span>
		</div>
	);
};

export default ResultsRow;
