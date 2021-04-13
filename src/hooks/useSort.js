import { useEffect, useState } from "react";

const sortHandler = (arr, sortBy, sortWay) => {
	const initialArr = [...arr];
	if (sortBy === "teamName") {
		if (sortWay[sortBy] === "asc") {
			initialArr.sort((a, b) => {
				return ("" + a.team.name).localeCompare(b.team.name);
			});
		} else {
			initialArr.sort((a, b) => {
				return ("" + b.team.name).localeCompare(a.team.name);
			});
		}
	} else {
		initialArr.sort((a, b) => {
			return sortWay[sortBy] === "asc"
				? b[sortBy] - a[sortBy]
				: a[sortBy] - b[sortBy];
		});
	}
	return initialArr;
};

export const useSort = (scores, limit) => {
	const spliceLimit = limit
		? limit
		: scores.results.standings[0].table.length;
	const arr = scores.results.standings[0].table.slice(0, spliceLimit);
	const [arrayToShow, setArrayToShow] = useState(arr);
	const [sortBy, setSortBy] = useState("position");
	const [sortWay, setSortWay] = useState({
		position: "desc",
		teamName: "desc",
		playedGames: "asc",
		won: "asc",
		draw: "asc",
		lost: "asc",
		goalsFor: "asc",
		goalsAgainst: "asc",
		points: "asc",
	});

	useEffect(() => {
		setArrayToShow(sortHandler(arr, sortBy, sortWay));
		setSortBy("position");
	}, [scores]);

	useEffect(() => {
		setArrayToShow(sortHandler(arrayToShow, sortBy, sortWay));
	}, [sortBy, sortWay]);

	return [arrayToShow, sortBy, setSortBy, sortWay, setSortWay];
};


// export const useSortScorers = (scores) => {
// 	const arr = scores.results.standings[0].table.slice(0, spliceLimit);
// 	const [arrayToShow, setArrayToShow] = useState(arr);
// 	const [sortBy, setSortBy] = useState("position");
// 	const [sortWay, setSortWay] = useState({
// 		numberOfGoals: "desc",
// 		playerName: "desc",
// 		playedAge: "asc",
// 		nationality: "asc",
// 		teamName: "asc",
// 	});

// 	useEffect(() => {
// 		setArrayToShow(sortHandler(arr, sortBy, sortWay));
// 		setSortBy("position");
// 	}, [scores]);

// 	useEffect(() => {
// 		setArrayToShow(sortHandler(arrayToShow, sortBy, sortWay));
// 	}, [sortBy, sortWay]);

// 	return [arrayToShow, sortBy, setSortBy, sortWay, setSortWay];
// };
