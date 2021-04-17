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
			<span>{textContent.scorers.goals}</span>
			<span>{textContent.scorers.player}</span>
			<span>{textContent.scorers.age}</span>
			<span>{textContent.scorers.nationality}</span>
			<span>{textContent.scorers.team}</span>
		</div>
	);
};

export default ScorersRowHeader;
