import React, { useContext } from "react";
import styles from "./Info.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/context";

const Info = (props) => {
	const { textContent } = useContext(AppContext);
	const mail = "mailto:dd.duszynski@gmail.com";
	const linkedin = "https://www.linkedin.com/in/dd-duszynski";
	const github = "https://github.com/dd-duszynski";

	return (
		<ul className={styles.info}>
			<li className={styles.infoItem}>
				<a
					href="https://www.football-data.org"
					target="_blank"
					className={styles.infoLink}
				>
					<span
						className={[styles.icon, styles.icon_database].join(
							" "
						)}
					/>
					{textContent.info[0]}: football-data.org
				</a>
			</li>
			<div className={styles.line} />
			<li className={styles.infoItem}>
				<a href={mail} className={styles.infoLink}>
					<i className={[styles.icon, styles.icon_email].join(" ")} />
					{textContent.info[1]}: dd.duszynski@gmail.com
				</a>
			</li>
			<div className={styles.line} />
			<li className={styles.infoItem}>
				<a href={linkedin} target="_blank" className={styles.infoLink}>
					<i
						className={[styles.icon, styles.icon_linkedin].join(
							" "
						)}
					/>
					Linkedin: Damian Duszyński
				</a>
			</li>
		</ul>
	);
};

export default Info;
