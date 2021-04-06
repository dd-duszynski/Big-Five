import React from 'react'
import styles from './FlagIcon.module.css';

const flagIcon = (props) => {
    let flagIcon;
    switch (props.id) {
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
    return (
        <span className={flagIcon}/>
    )
}

export default flagIcon
