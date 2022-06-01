import React from "react";
import styles from "./payment.module.css"


const Date = ({date}) => {
    return (
        <div>
            <p className={styles.date}>{date}</p>
        </div>
    )
}

export default Date