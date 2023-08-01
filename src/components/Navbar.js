import React from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.navLeft}>
        <span>Habit Tracker</span>
      </div>
      <div className={styles.navRight}>

      </div>
    </div>
  )
}

export default Navbar;