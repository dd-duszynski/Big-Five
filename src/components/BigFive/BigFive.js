import React, { useState, useEffect, useContext } from "react";
import styles from "./BigFive.module.scss";
import { LEAGUES } from "../../content/LEAGUES";
import MiniTable from "./MiniTable/MiniTable";
import { getStandings } from "../../api/footballApi";
import { AppContext } from "../../context/context";
import MainBar from "../MainBar/MainBar";
import SmallDeviceNav from "./SmallDeviceNav/SmallDeviceNav";

const League = ({ league, expanded, onToggle, theme, isSmallDevice }) => {
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
			{expanded && isSmallDevice ? (
				<SmallDeviceNav league={league} />
			) : null}
			{expanded && <MiniTable scores={results} league={league} />}
		</>
	);
};

const BigFive = () => {
	const [expandedTab, setExpandedTab] = useState(null);
	const { theme, size } = useContext(AppContext);

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
					isSmallDevice={size < 1000}
				/>
			))}
		</div>
	);
};

export default BigFive;
