import React, { useEffect, useState } from "react";
import styles from "./MatchList.module.scss";
import Spinner from "../../UI/Spinner";
import MainBar from "../../UI/MainBar";
import ResultsRowHeader from "../../UI/ResultsRowHeader";
import ResultsRow from "../../UI/ResultsRow";

const MatchList = ({ matches, league, onRoundChange, rounds, round }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [matchesToShow, setMatchesToShow] = useState(
		matches.matches.filter((i) => i.matchday === round)
	);
	console.log(matches);
	useEffect(() => {
		setIsLoaded(false);
		setMatchesToShow(matches.matches.filter((i) => i.matchday === round));
		setIsLoaded(true);
	}, [matches, round]);

	return isLoaded ? (
		<div className={styles.matches}>
			<MainBar
				league={league}
				noClick
				rounds={rounds}
				onRoundChange={onRoundChange}
			/>
			<ResultsRowHeader />
			{matchesToShow.map((item, index) => {
				return <ResultsRow key={`matchrow_${index}`} result={item} />;
			})}
		</div>
	) : (
		<Spinner />
	);
};

export default MatchList;
