import React from 'react';
import styles from "./payment.module.css"


const Devices = ({ sub }) => {
  return (
    <div className={styles.devices}>
      <h2>{sub}</h2>
      <h1>➜</h1>
    </div>
  )
}

export default Devices