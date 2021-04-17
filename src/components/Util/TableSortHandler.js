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
   } else {
      initialArr.sort((a, b) => {
         return sortWay[sortBy] === "asc"
            ? b[sortBy] - a[sortBy]
            : a[sortBy] - b[sortBy];
      });
   }
   return initialArr;
};