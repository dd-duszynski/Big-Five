import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import styles from "./TableRow.module.scss";

const TableRow = ({ scores, position }) => {
  const { theme } = useContext(AppContext);

  let themeItem;
  if (theme === "light") {
    themeItem = styles.miniTableItemLight;
  } else {
    themeItem = styles.miniTableItemDark;
  }

  return (
    <div className={themeItem}>
      <span>{scores[position].position}</span>
      <span>
        <img src={scores[position].team.crestUrl} alt="logo" />
        {scores[position].team.name}
      </span>
      <span>{scores[position].playedGames}</span>
      <span>{scores[position].won}</span>
      <span>{scores[position].draw}</span>
      <span>{scores[position].lost}</span>
      <span>
        {scores[position].goalsFor}
      </span>
      <span>
        {scores[position].goalsAgainst}
      </span>
      <span>{scores[position].points}</span>
    </div>
  );
};

export default TableRow;
