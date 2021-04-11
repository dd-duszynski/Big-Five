import { useEffect, useState } from 'react'

const useSort = (arr, scores) => {
   const [arrayToShow, setArrayToShow] = useState(arr)
   const [sortBy, setSortBy] = useState(null)
   const [sortWay, setSortWay] = useState({
      position: "desc",
      teamName: "desc",
      playedGames: "asc",
      won: "asc",
      draw: "asc",
      lost: "asc",
      goalDifference: "asc",
      points: "asc"
   })

   const sortHandler = (arr, sortBy, sortWay) => {
      const initialArr = [...arr];
      if (sortBy === "teamName") {
         if (sortWay[sortBy] === "asc") {
            initialArr.sort((a, b) => {
               return ('' + a.team.name).localeCompare(b.team.name)
            })
         } else {
            initialArr.sort((a, b) => {
               return ('' + b.team.name).localeCompare(a.team.name)
            })
         }
      } else {
         initialArr.sort((a, b) => {
            return sortWay[sortBy] === "asc" ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy];
         })
      }
      return initialArr
   }

   useEffect(() => {
      setArrayToShow(arr)
      setSortBy(null)
   }, [scores])

   useEffect(() => {
      setArrayToShow(sortHandler(arrayToShow, sortBy, sortWay))
   }, [sortBy, sortWay])

   return [
      arrayToShow,
      sortBy,
      setSortBy,
      sortWay,
      setSortWay
   ]

}

export default useSort
