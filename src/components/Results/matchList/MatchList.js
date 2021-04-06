import React, { useContext, useEffect, useState } from "react";
import styles from "./MatchList.module.scss";
import FlagIcon from "../../FlagIcon/FlagIcon";
import MatchRow from "./matchRow/MatchRow";
import { AppContext } from "../../../context/context";

const MatchList = ({ matches, league, onRoundChange, rounds, round }) => {
	const { textContent } = useContext(AppContext);
	const [matchesToShow, setMatchesToShow] = useState(
		matches.matches.filter((i) => i.matchday === round)
	);

	useEffect(() => {
		setMatchesToShow(matches.matches.filter((i) => i.matchday === round));
	}, [round, league]);

	return rounds && matches ? (
		<div className={styles.matches}>
			<div className={styles.matchesHeader}>
				<FlagIcon id={league.id} />
				<h2>
					{league.name}: {textContent.results[1]}
				</h2>
				{rounds && (
					<select onChange={(e) => onRoundChange(e.target.value)}>
						{rounds.map((round) => {
							return (
								<option key={`metchday_${round}`} value={round}>
									{round}
								</option>
							);
						})}
					</select>
				)}
			</div>
			<table>
				<MatchRow
					heading
					homeTeam={textContent.results[2]}
					result={textContent.results[3]}
					awayTeam={textContent.results[4]}
				/>
				{matchesToShow.map((item, index) => {
					return (
						<MatchRow
							key={`matchrow_${index}`}
							homeTeam={item.homeTeam.name}
							awayTeam={item.awayTeam.name}
							fullTimeHomeTeam={item.score.fullTime.homeTeam}
							fullTimeAwayTeam={item.score.fullTime.awayTeam}
						/>
					);
				})}
			</table>
		</div>
	) : (
		<p>Loading ...</p>
	);
};

export default MatchList;
