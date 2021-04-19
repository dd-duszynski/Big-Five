import React, { useState, useEffect, useContext } from "react";
import styles from "./BigFive.module.scss";
import { LEAGUES } from "../../content/LEAGUES";
import MiniTable from "./MiniTable/MiniTable";
import { getTable } from "../../api/footballApi";
import { AppContext } from "../../context/context";
import MainBar from "../MainBar/MainBar";
import SmallDeviceNavigation from "./SmallDeviceNavigation/SmallDeviceNavigation";
import Spinner from '../UI/Spinner'
const League = ({ league, expanded, onToggle, theme, isSmallDevice, }) => {
   const [results, setResults] = useState(null);

   const loadData = () => {
      getTable(league.id).then((results) => setResults({ results }));
   };

   useEffect(() => {
      loadData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   if (!results) {
      return <Spinner />;
   }

   return (
      <>
         <MainBar
            theme={theme}
            league={league}
            onClick={() => onToggle(league.id)}
            choosen={expanded}
         />
         {expanded && isSmallDevice ? (
            <SmallDeviceNavigation league={league} />
         ) : null}
         { expanded && <MiniTable scores={results} league={league} />}
      </>
   );
};

const BigFive = () => {
   const [expandedTab, setExpandedTab] = useState(null);
   const { theme, size } = useContext(AppContext);

   const onTabToggle = (tabId) => {
      if (tabId === expandedTab) {
         setExpandedTab(null);
      } else {
         setExpandedTab(tabId);
      }
   };
   return (
      <div className={styles.big5}>
         {LEAGUES.map((item) => (
            <League
               expanded={expandedTab === item.id}
               league={item}
               key={item.id}
               onToggle={onTabToggle}
               theme={theme}
               isSmallDevice={size < 1000}
            />
         ))}
      </div>
   );
};

export default BigFive;
