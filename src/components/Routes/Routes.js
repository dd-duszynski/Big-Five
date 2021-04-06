import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./MainSwitch.module.scss";
import BigFive from "../BigFive/BigFive";
import Settings from "../settings/Settings";
import Info from "../info/Info";
import Table from "../table/Table";
import Results from "../results/Results";
import Scorers from "../Scorers/Scorers";
import AppContext from "../../context/context";

class MainSwitch extends Component {
	state = {
		img: 0
	};
	static contextType = AppContext;
	getRandom = (min, max) => {
		let nr = Math.round(Math.random() * (max - min));
		console.log(nr);
		this.setState({ img: nr });
	};
	componentDidMount() {
		this.getRandom(0, 6);
	}
	render() {
		let theme;
		this.context.theme === "light" ? (theme = styles.imgContainer) : (theme = styles.imgContainerDark);
		const img = [styles.img1, styles.img2, styles.img3, styles.img4, styles.img5, styles.img6, styles.img7];
		return (
			<div className={styles.MainSwitch}>
				<Switch>
					<Route exact path="/" component={BigFive} />
					<Route path="/settings" component={Settings} />
					<Route path="/info" component={Info} />
					<Route path="/table/:id" component={Table} />
					<Route path="/results/:id" component={Results} />
					<Route path="/scorers/:id" component={Scorers} />
					<Route component={BigFive} />
				</Switch>
				<div className={theme}>
					<img className={[img[this.state.img], styles.backgroundImage].join(" ")} />
				</div>
			</div>
		);
	}
}

export default MainSwitch;
