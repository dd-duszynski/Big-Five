export const sortHandler = (arr, sortBy, sortWay) => {
   const initialArr = [...arr];
   if (sortBy === "teamName") {
      if (sortWay[sortBy] === "asc") {
         initialArr.sort((a, b) => {
            return ("" + b.team.name).localeCompare(a.team.name);
         });
      } else {
         initialArr.sort((a, b) => {
            return ("" + a.team.name).localeCompare(b.team.name);
         });
      }
   } else if (sortBy === "player") {
      if (sortWay[sortBy] === "asc") {
         initialArr.sort((a, b) => {
            return ("" + b.player.name).localeCompare(a.player.name);
         });
      } else {
         initialArr.sort((a, b) => {
            return ("" + a.player.name).localeCompare(b.player.name);
         });
      }
   } else if (sortBy === "nationality") {
      if (sortWay[sortBy] === "asc") {
         initialArr.sort((a, b) => {
            return ("" + b.player.nationality).localeCompare(a.player.nationality);
         });
      } else {
         initialArr.sort((a, b) => {
            return ("" + a.player.nationality).localeCompare(b.player.nationality);
         });
      }
   } else if (sortBy === "goals") {
      initialArr.sort((a, b) => {
         return sortWay[sortBy] === "asc"
            ? b.numberOfGoals - a.numberOfGoals
            : a.numberOfGoals - b.numberOfGoals;
      });
   } else if (sortBy === "position") {
      initialArr.sort((a, b) => {
         return sortWay[sortBy] === "asc"
            ? b.position - a.position
            : a.position - b.position;
      });
   } else if (sortBy === "age") {
      if (sortWay[sortBy] === "asc") {
         initialArr.sort((a, b) => {
            return ("" + a.player.dateOfBirth).localeCompare(b.player.dateOfBirth);
         });
      } else {
         initialArr.sort((a, b) => {
            return ("" + b.player.dateOfBirth).localeCompare(a.player.dateOfBirth);
         });
      }
   }
   return initialArr;
};