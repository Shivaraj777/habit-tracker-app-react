import React, { Component } from 'react'
import styles from '../styles/WeekView.module.css';
import { connect } from 'react-redux';
import HabbitWeekView from '../components/HabbitWeekView';

export class WeekView extends Component {
  render() {
    const {habits} = this.props;
    // console.log(habits);

    return (
      <div className='week-view'>
        <div className={styles.calHeader}>August 2023</div>
        <div className={styles.weekDays}>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thur</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div className={styles.habitsContainer}>
          {habits.map((habit, index) => (
            <HabbitWeekView habit={habit} key={index} />
          ))}
        </div>
      </div>
    )
  }
}

// callback function to get state from store
function mapStateToProps(state){
  return state;
}

// connect component to store
const connectedWeekViewComponent = connect(mapStateToProps)(WeekView);

export default connectedWeekViewComponent;