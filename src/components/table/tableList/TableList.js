import React from "react";
import styles from "./TableList.module.scss";
import TableRow from "../../UI/TableRow";
import TableRowHeader from "../../UI/TableRowHeader";
import MainBar from "../../UI/MainBar";

const TableList = ({ scores, league }) => {
	return (
		scores && (
			<div className={styles.TableList}>
				<MainBar league={league} noClick />
				<TableRowHeader />
				{scores.results.standings[0].table.map((_, index) => (
					<TableRow scores={scores} position={index} />
				))}
			</div>
		)
	);
};
export default TableList;
