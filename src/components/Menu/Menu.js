import React, { useContext } from "react";
import styles from "./Menu.module.scss";
import { LEAGUES } from "../../content/LEAGUES";
import League from "./League/League";
import MenuFooter from "./MenuFooter/MenuFooter";
import { AppContext } from "../../context/context";

const Menu = () => {
	const { theme } = useContext(AppContext);

	let theme2;
	theme === "light" ? (theme2 = styles.menu) : (theme2 = styles.menuDark);
	return (
		<div className={theme2}>
			<nav className={styles.menu_nav}>
				{LEAGUES.map((item) => (
					<League key={item.name} league={item.name} id={item.id} />
				))}
			</nav>
		</div>
	);
};

export default Menu;
