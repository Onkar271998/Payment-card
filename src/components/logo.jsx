import React from "react";
import styles from "./payment.module.css"
const Logo = ({logo}) => {
    return (
        <div>
            <img src={logo} className={styles.logo}/>
        </div>
    )
}

export default Logo