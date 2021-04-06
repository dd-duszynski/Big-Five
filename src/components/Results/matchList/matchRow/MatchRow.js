import React from "react";
import styles from "./MatchRow.module.css";

const MatchRow = ({
	heading,
	homeTeam,
	result,
	awayTeam,
	fullTimeHomeTeam,
	fullTimeAwayTeam,
}) => {
	const matchRowHeading = (
		<thead>
			<tr className={styles.matchRowHeading}>
				<th>{homeTeam}</th>
				<th>{result}</th>
				<th>{awayTeam}</th>
			</tr>
		</thead>
	);
	const matchRowItem = (
		<tbody>
			<tr className={styles.matchRowItem}>
				<td className={styles.matches_row_1}>{homeTeam}</td>
				<td className={styles.matches_row_2}>
					{fullTimeHomeTeam} - {fullTimeAwayTeam}
				</td>
				<td className={styles.matches_row_3}>{awayTeam}</td>
			</tr>
		</tbody>
	);
	return heading ? matchRowHeading : matchRowItem;
};

export default MatchRow;
