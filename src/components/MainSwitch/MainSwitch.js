import React, { useState, useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./MainSwitch.module.scss";
import BigFive from "../BigFive/BigFive";
import Settings from "../Settings/Settings";
import Info from "../Info/Info";
import Table from "../table/Table";
import Results from "../Results/Results";
import Scorers from "../Scorers/Scorers";
import { AppContext } from "../../context/context";

const MainSwitch = () => {
   const [imageIndex, setImageIndex] = useState(0);

   const { theme } = useContext(AppContext)

   const getRandom = (min, max) => {
      let nr = Math.round(Math.random() * (max - min));
      setImageIndex(nr)
   };

   useEffect(() => {
      getRandom()
   }, [])

   let theme2;
   theme === "light" ? (theme2 = styles.imgContainer) : (theme2 = styles.imgContainerDark);
   const img = [styles.img1, styles.img2, styles.img3, styles.img4, styles.img5, styles.img6, styles.img7];
   const choosenImg = img[imageIndex]
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
         <div className={theme2}>
            <img className={[choosenImg, styles.backgroundImage].join(" ")} />
         </div>
      </div>
   );
}

export default MainSwitch;
