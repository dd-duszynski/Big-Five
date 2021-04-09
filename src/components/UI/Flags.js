import React from "react";
import styles from "./Flags.module.scss";
import BL1 from "../../assets/flag/bundesliga.png"
import PD from "../../assets/flag/LaLiga.png"
import FL1 from "../../assets/flag/Ligue1.png"
import PL from "../../assets/flag/premier.png"
import SA from "../../assets/flag/SerieA.png"

const Flags = ({ id }) => {
   let flagIcon;
   switch (id) {
      case "BL1":
         flagIcon = BL1;
         break;
      case "PD":
         flagIcon = PD;
         break;
      case "FL1":
         flagIcon = FL1;
         break;
      case "PL":
         flagIcon = PL;
         break;
      case "SA":
         flagIcon = SA;
         break;
      default:
         console.log('Flags Error');
   }

   return (
      <div className={styles.Flags}>
         <img src={flagIcon} alt=""/>
      </div>
   );
};

export default Flags;
