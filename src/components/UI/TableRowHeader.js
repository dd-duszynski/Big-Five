import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import styles from "./TableRowHeader.module.scss";

const TableRowHeader = () => {
   const { textContent, theme } = useContext(AppContext);
	let themeHeading;
	if (theme === "light") {
		themeHeading = styles.miniTableHeadingLight;
	} else {
		themeHeading = styles.miniTableHeadingDark;
	}
	return (
		<div className={themeHeading}>
			<span>{textContent.table[0]}</span>
			<span>{textContent.table[1]}</span>
			<span>{textContent.table[2]}</span>
			<span>{textContent.table[3]}</span>
			<span>{textContent.table[4]}</span>
			<span>{textContent.table[5]}</span>
			<span>{textContent.table[6]}</span>
			<span>{textContent.table[7]}</span>
		</div>
	);
};

export default TableRowHeader;
