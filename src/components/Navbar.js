import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.navLeft}>
        <Link to='/'>Habit Tracker</Link>
      </div>
      <div className={styles.navRight}>
        <Link to='/week-view'>Week view</Link>
      </div>
    </div>
  )
}

export default Navbar;