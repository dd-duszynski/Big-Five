import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import styles from "./TableRow.module.scss";

const TableRow = ({ scores, position }) => {
   const { theme, textContent } = useContext(AppContext);

   let themeItem;
   if (theme === "light") {
      themeItem = styles.miniTableItemLight;
   } else {
      themeItem = styles.miniTableItemDark;
   }
   const last5games = scores[position].form.split(
      ","
   );

   return (
      <div className={themeItem}>
         <span>{scores[position].position}</span>
         <span>
            <img
               src={
                  scores[position].team
                     .crestUrl
               }
               alt="logo"
            />
            {scores[position].team.name}
         </span>
         <span>
            {scores[position].playedGames}
         </span>
         <span>{scores[position].won}</span>
         <span>{scores[position].draw}</span>
         <span>{scores[position].lost}</span>
         <span>
            {scores[position].goalsFor} -{" "}
            {scores[position].goalsAgainst}{" "}
         </span>
         <span>{scores[position].points}</span>
         <div className={styles.formBox}>
            {last5games.map((item, index) => {
               let css, text;
               if (item === "W") {
                  css = styles.win;
                  text = textContent.table[9];
               } else if (item === "D") {
                  css = styles.draw;
                  text = textContent.table[10];
               } else {
                  css = styles.lose;
                  text = textContent.table[11];
               }
               return <div className={css} key={index}>{text}</div>;
            })}
         </div>
      </div>
   );
};

export default TableRow;
