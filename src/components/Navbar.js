import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import { connect } from 'react-redux';
import { goToWeekView } from '../actions';

function Navbar(props) {
  const {showWeekView} = props;

  const toggleView = (showWeekView) => {
    props.dispatch(goToWeekView(showWeekView));
  }

  return (
    <div className={styles.nav}>
      <div className={styles.navLeft}>
        Habit Tracker
      </div>
      <div className={styles.navRight}>
        {showWeekView ? 
          <Link to='/'>
            <p onClick={() => toggleView(false)}>Go To Detail view</p>
          </Link> : 
          <Link to='/week-view'>
            <p onClick={() => toggleView(true)}>Go to Week view</p>
          </Link>
        }
      </div>
    </div>
  )
}

function mapStateToProps(state){
  return state;
}

const ConnectedNavbarComponent = connect(mapStateToProps)(Navbar);

export default ConnectedNavbarComponent;