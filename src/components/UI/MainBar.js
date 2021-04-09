import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import styles from "./MainBar.module.scss";
import Flags from "./Flags";
import { RiArrowUpSLine } from "react-icons/ri";

const MainBar = ({
	league,
	onClick,
	choosen,
	noClick,
	rounds,
	onRoundChange,
}) => {
	const { theme } = useContext(AppContext);

	const css =
		theme === "light" ? styles.LeagueScoresLight : styles.LeagueScoresDark;
   const cssMainPage = !noClick && styles.mainPage;
   
	const iconCSS = choosen
		? [styles.icon, styles.rotate].join(" ")
		: styles.icon;

	const clickHandler = onClick ? onClick : null;

	return (
		<div className={[css, cssMainPage].join(' ')} onClick={clickHandler}>
			<Flags id={league.id} />
			<h2 className={styles.header}>{league.name}</h2>
			{!noClick && <RiArrowUpSLine className={iconCSS} />}
			{rounds && (
				<select 
               onChange={(e) => onRoundChange(e.target.value)}
            >
					{rounds.map((round) => {
						return (
							<option key={`metchday_${round}`} value={round}>
								{round}
							</option>
						);
					})}
				</select>
			)}
		</div>
	);
};

export default MainBar;
