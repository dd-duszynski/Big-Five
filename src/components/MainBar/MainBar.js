import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import styles from "./MainBar.module.scss";
import Flags from "../UI/Flags";
import Arrow from "../UI/Arrow";
import { RiArrowUpSLine, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const MainBar = ({
   league,
   onClick,
   choosen,
   noClick,
   rounds,
   round,
   onRoundChange,
}) => {
   const { theme, textContent } = useContext(AppContext);

   const css =
      theme === "light" ? styles.MainBarLight : styles.MainBarDark;
   const cssMainPage = !noClick && styles.mainPage;

   const iconCSS = choosen
      ? [styles.icon, styles.rotate].join(" ")
      : styles.icon;

   const clickHandler = onClick ? onClick : null;

   const arrowClickHandler = (direction) => {
      const roundsLength = rounds.length
      if (direction === "left" && round === 1) {
         return
      } else if (direction === "left") {
         onRoundChange(round - 1)
      } else if (direction === "right" && round === roundsLength) {
         return
      } else {
         onRoundChange(round + 1)
      }
   }

   return (
      <div className={[css, cssMainPage].join(' ')} onClick={clickHandler}>
         <Flags id={league.id} />
         <div className={styles.headerBox}>
            <h2 className={styles.header}>{league.name}</h2>
            {rounds && (
               <div className={styles.roundsContainer}>
                  <label
                     className={styles.label}
                     for="round-select"
                  >
                     {textContent.results[1]}
                  </label>
                  <Arrow
                     onClick={() => arrowClickHandler("left")}
                     direction="left"
                     disable={round === 1}
                  />
                  <select
                     className={styles.select}
                     value={round}
                     onChange={(e) => onRoundChange(e.target.value)}
                     id="round-select"
                  >
                     {rounds.map((r) => {
                        return (
                           <option
                              key={`metchday_${r}`}
                              value={r}
                              selected={r === round}
                           >
                              {r}
                           </option>
                        );
                     })}
                  </select>
                  <Arrow
                     onClick={() => arrowClickHandler("right")}
                     direction="right"
                     disable={round === rounds.length}
                  />

               </div>
            )}

         </div>
         {!noClick && <RiArrowUpSLine className={iconCSS} />}
      </div>
   )
}
export default MainBar;
