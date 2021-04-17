import React, { useState, useEffect } from "react";
import { getTable } from "../../api/footballApi";
import { LEAGUES } from "../../content/LEAGUES";
import TableList from "./TableList/TableList";
import Spinner from "../UI/Spinner";
const Table = (props) => {
	const [results, setResults] = useState(null);

	useEffect(() => {
		loadData();
	}, [props.match.params.id]);

	const loadData = () => {
		getTable(props.match.params.id).then((results) =>
			setResults({ results })
		);
	};

	if (!results) {
		return <Spinner />;
	}

	const league = LEAGUES.find((item) => item.id === props.match.params.id);
	return <TableList scores={results} league={league} />;
};
export default Table;
