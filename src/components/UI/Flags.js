import React from "react";
import styles from "./Flags.module.scss";

const Flags = ({id}) => {
	let flagIcon;
	switch (id) {
		case "BL1":
			flagIcon = styles.BL1;
			break;
		case "PD":
			flagIcon = styles.PD;
			break;
		case "FL1":
			flagIcon = styles.FL1;
			break;
		case "PL":
			flagIcon = styles.PL;
			break;
		case "SA":
			flagIcon = styles.SA;
	}

	return <span className={flagIcon} />;
};

export default Flags;
