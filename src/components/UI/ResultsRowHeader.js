import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import styles from "./ResultsRowHeader.module.scss";

const ResultsRowHeader = () => {
	const { textContent, theme } = useContext(AppContext);

	const themeHeading =
		theme === "light"
			? styles.ResultsRowHeaderLight
			: styles.ResultsRowHeaderDark;

	return (
		<div className={themeHeading}>
			<span>{textContent.results.home}</span>
			<span>{textContent.results.result}</span>
			<span>{textContent.results.away}</span>
		</div>
	);
};

export default ResultsRowHeader;
