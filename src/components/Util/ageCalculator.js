export const ageCalculator = (date) => {
   const difference = Date.now() - date;
   const age = new Date(difference);
   return Math.abs(age.getUTCFullYear() - 1970);
};