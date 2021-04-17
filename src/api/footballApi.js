const responseCache = {};

const fetchJsonFromAPI = url => {
   if (responseCache[url]) {
      return Promise.resolve(responseCache[url]);
   }
   return fetch("https://big-five-server.herokuapp.com/" + url)
      .then(res => res.json())
      .then(res => {
         responseCache[url] = res;
         return res;
      });
};

export const getTable = id => {
   return fetchJsonFromAPI(`table/${id}`);
};

export const getResults = (id) => {
   const url = `results/${id}`;
   return fetchJsonFromAPI(url);
};

export const getScorers = id => {
   return fetchJsonFromAPI(`scorers/${id}`);
};
