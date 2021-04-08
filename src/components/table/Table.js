import React, { useState, useEffect } from "react";
import { getStandings } from "../../api/footballApi";
import { LEAGUES } from "../../content/LEAGUES";
import TableList from "./tableList/TableList";

const Table = (props) => {
   const [results, setResults] = useState(null);

   useEffect(() => {
      loadData();
   }, [props.match.params.id]);

   const loadData = () => {
      getStandings(props.match.params.id).then((results) =>
         setResults({ results })
      );
   };

   if (!results) {
      return "Loading...";
   }

   const league = LEAGUES.find((item) => item.id === props.match.params.id);

   return <TableList scores={results} league={league} />;
};
export default Table;
