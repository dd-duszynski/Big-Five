import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import styles from "./ScorersRowHeader.module.scss";

const ScorersRowHeader = () => {
	const { textContent, theme } = useContext(AppContext);

	const themeHeading =
		theme === "light"
			? styles.ScorersRowHeaderLight
			: styles.ScorersRowHeaderDark;

	return (
		<div className={themeHeading}>
			<span>#</span>
			<span>{textContent.scorers[1]}</span>
			<span>{textContent.scorers[2]}</span>
			<span>{textContent.scorers[3]}</span>
			<span>{textContent.scorers[4]}</span>
			<span>{textContent.scorers[5]}</span>
		</div>
	);
};

export default ScorersRowHeader;
