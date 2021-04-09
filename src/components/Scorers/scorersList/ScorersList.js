import React from "react";
import styles from "./ScorersList.module.scss";
import Spinner from "../../UI/Spinner";
import ScorersRow from "../../UI/ScorersRow";
import ScorersRowHeader from "../../UI/ScorersRowHeader";
import MainBar from "../../UI/MainBar";

const ScorersList = ({ scorers, league }) => {
	return (
		<div className={styles.scorers}>
			<MainBar league={league} noClick />
			<ScorersRowHeader />
			{scorers ? (
				scorers.map((item) => (
					<ScorersRow key={item.player.name} player={item} />
				))
			) : (
				<Spinner />
			)}
		</div>
	);
};
export default ScorersList;
