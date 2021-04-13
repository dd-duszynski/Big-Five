import React from "react";
import styles from "./TableList.module.scss";
import TableRow from "../../UI/TableRow";
import TableRowHeader from "../../UI/TableRowHeader";
import MainBar from "../../MainBar/MainBar";
import {useSort} from "../../../hooks/useSort";

const TableList = ({ scores, league }) => {
	const [arrayToShow, sortBy, setSortBy, sortWay, setSortWay] = useSort(
		scores
	);

	return (
		<div className={styles.TableList}>
			<MainBar league={league} noClick />
			<div className={styles.container}>
				<TableRowHeader
					sortBy={sortBy}
					sortWay={sortWay}
					setSortBy={setSortBy}
					setSortWay={setSortWay}
				/>
				{arrayToShow.map((_, index) => (
					<TableRow
						scores={arrayToShow}
						position={index}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default TableList;
