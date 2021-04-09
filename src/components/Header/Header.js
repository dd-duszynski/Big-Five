import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { AppContext } from "../../context/context";

const Header = () => {
	const { textContent, theme } = useContext(AppContext);

	let css;
	theme === "light" ? (css = styles.headerLight) : (css = styles.headerDark);

	return (
		<header className={css}>
			<Link to="/">
				<h1 className={styles.home}>BIG FIVE</h1>
			</Link>
			<nav>
				<ul className={styles.navList}>
					<li>
						<NavLink
							className={styles.navListItem}
							activeClassName={styles.navListItemActive}
							exact
							to="/"
						>
							{textContent.navigation[3]}
						</NavLink>
					</li>
					<li>
						<NavLink
							className={styles.navListItem}
							activeClassName={styles.navListItemActive}
							exact
							to="/settings"
						>
							{textContent.navigation[4]}
						</NavLink>
					</li>
					<li>
						<NavLink
							className={styles.navListItem}
							activeClassName={styles.navListItemActive}
							exact
							to="/info"
						>
							{textContent.navigation[5]}
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
