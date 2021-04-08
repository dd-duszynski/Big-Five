import React from "react";
import styles from "./MiniTable.module.scss";
import TableRowHeader from "../../UI/TableRowHeader";
import TableRow from "../../UI/TableRow";

const MiniTable = ({ scores }) => {
	return (
		<div className={styles.miniTable}>
			<TableRowHeader />
			<TableRow scores={scores} position={0} />
			<TableRow scores={scores} position={1} />
			<TableRow scores={scores} position={2} />
			<TableRow scores={scores} position={3} />
			<TableRow scores={scores} position={4} />
		</div>
	);
};

export default MiniTable;
