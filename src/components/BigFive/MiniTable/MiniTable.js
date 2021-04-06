import React from "react";
import styles from "./MiniTable.module.scss";
import { MiniTableItem } from "../MiniTableItem/MiniTableItem";

const MiniTable = ({ scores }) =>
	scores && (
		<table className={styles.miniTable}>
			<MiniTableItem position={0} scores={scores} heading />
			<MiniTableItem position={0} scores={scores} />
			<MiniTableItem position={1} scores={scores} />
			<MiniTableItem position={2} scores={scores} />
			<MiniTableItem position={3} scores={scores} />
			<MiniTableItem position={4} scores={scores} />
		</table>
	);

export default MiniTable;
