import { token } from "./SECRET"

const options = {
   headers: { "X-Auth-Token": token }
};
const responseCache = {};

const fetchJsonFromAPI = url => {
   if (responseCache[url]) {
      return Promise.resolve(responseCache[url]);
   }
   return fetch("https://big-five-server.herokuapp.com/" + url)
      // return fetch("https://api.football-data.org/v2/" + url, options)
      .then(res => res.json())
      .then(res => {
         responseCache[url] = res;
         return res;
      });
};

export const getStandings = id => {
   return fetchJsonFromAPI(`table/${id}`);
};

export const getMatches = (id) => {
   const url = `results/${id}`;
   return fetchJsonFromAPI(url);
};

export const getScorers = id => {
   return fetchJsonFromAPI(`scorers/${id}`);
};
