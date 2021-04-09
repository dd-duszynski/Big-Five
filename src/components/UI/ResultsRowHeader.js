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
			<span>{textContent.results[2]}</span>
			<span>{textContent.results[3]}</span>
			<span>{textContent.results[4]}</span>
		</div>
	);
};

export default ResultsRowHeader;
