import { useEffect, useState } from "react";
import { sortHandler } from "../components/Util/TableSortHandler";

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


