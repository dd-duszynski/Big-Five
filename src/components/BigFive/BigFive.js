import React, { useState, useEffect, useContext } from "react";
import styles from "./BigFive.module.scss";
import { LEAGUES } from "../../content/LEAGUES";
import MiniTable from "./MiniTable/MiniTable";
import { getStandings } from "../../api/footballApi";
import { AppContext } from "../../context/context";
import MainBar from "../UI/MainBar";

const League = ({ league, expanded, onToggle, theme }) => {
	const [results, setResults] = useState(null);

	const loadData = () => {
		getStandings(league.id).then((results) => setResults({ results }));
	};

	useEffect(() => {
		loadData();
	}, []);

	return (
		<>
			<MainBar
				theme={theme}
				league={league}
				onClick={() => onToggle(league.id)}
				choosen={expanded}
			/>
			{expanded && <MiniTable scores={results} />}
		</>
	);
};

const BigFive = () => {
	const [expandedTab, setExpandedTab] = useState(null);
	const { theme } = useContext(AppContext);

	const onTabToggle = (tabId) => {
		if (tabId === expandedTab) {
			setExpandedTab(null);
		} else {
			setExpandedTab(tabId);
		}
	};

	return (
		<div className={styles.big5}>
			{LEAGUES.map((item) => (
				<League
					expanded={expandedTab === item.id}
					league={item}
					key={item.id}
					onToggle={onTabToggle}
					theme={theme}
				/>
			))}
		</div>
	);
};

export default BigFive;
