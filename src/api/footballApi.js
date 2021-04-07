import {token} from "./SECRET"

const options = {
   headers: { "X-Auth-Token": token }
};
const responseCache = {};

const fetchJsonFromAPI = url => {
   if (responseCache[url]) {
      return Promise.resolve(responseCache[url]);
   }
   return fetch("https://api.football-data.org/v2/" + url, options)
      .then(res => res.json())
      .then(res => {
         responseCache[url] = res;
         return res;
      });
};

export const getStandings = id => {
   return fetchJsonFromAPI(`competitions/${id}/standings`);
};

export const getMatches = (id, matchday) => {
   const url = matchday ? `competitions/${id}/matches?matchday=${matchday}` : `competitions/${id}/matches`;
   return fetchJsonFromAPI(url);
};

export const getScorers = id => {
   return fetchJsonFromAPI(`competitions/${id}/scorers?limit=50`);
};
