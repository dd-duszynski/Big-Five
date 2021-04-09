import React, { useState, useEffect } from "react";
import { getMatches } from "../../api/footballApi";
import { LEAGUES } from "../../content/LEAGUES";
import MatchList from "./MatchList/MatchList";
import Spinner from "../UI/Spinner";

const Results = (props) => {
	const [matches, setMatches] = useState(null);
	const [round, setRound] = useState(1);
	const [rounds, setRounds] = useState(null);

	useEffect(() => {
		loadData();
	}, [props.match.params.id]);

	const loadData = () => {
		getMatches(props.match.params.id).then((results) => {
			const matchDays = results.matches.reduce((matchDays, match) => {
				matchDays[match.matchday] = true;
				return matchDays;
			}, {});
			const matchDaysRounds = Object.keys(matchDays).sort(
				(a, b) => a - b
			);
			setRounds(matchDaysRounds);
			setMatches(results);
		});
	};

	const onRoundChange = (newRound) => {
		const newRoundNr = parseInt(newRound);
		if (round !== newRound) {
			setRound(newRoundNr);
		}
	};

	const league = LEAGUES.find((item) => item.id === props.match.params.id);

	if (!matches) {
		return <Spinner />;
	}

	return (
		<MatchList
			onRoundChange={onRoundChange}
			matches={matches}
			rounds={rounds}
			league={league}
			round={round}
		/>
	);
};

export default Results;
