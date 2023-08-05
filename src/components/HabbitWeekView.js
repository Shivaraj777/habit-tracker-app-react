import React, { Component } from 'react';
import styles from '../styles/WeekView.module.css';
import SetHabitStatusModal from '../components/SetHabitStatusModal';
import { connect } from 'react-redux';
import { showSetStatusModal } from '../actions';
import '../styles/imageStyle.css';

export class HabbitWeekView extends Component {

  handleSetStatus = (habitId, dayId) => {
    localStorage.setItem('habit-id', habitId);
    localStorage.setItem('habit-day-id', dayId);
    this.props.dispatch(showSetStatusModal(true));
  }

  render() {
    const {habit, showSetStatusModal} = this.props;

    return (
      <div className={styles.habitContainer}>
        <div className={styles.habitDetails}>{habit.name}</div>
        <div className={styles.daysContainer}>
          {habit.weekLog.map((day, index) => (
              <div key={index} onClick={() => this.handleSetStatus(habit.id, day.id)}>
                <span>{day.dd}</span>
                { 
                  (day.isDone ? <i className="fa-solid fa-check"></i> : (day.isDone !== '' ? <i className="fa-solid fa-xmark"></i> : <></>))
                }
              </div>
          ))}
        </div>
        {showSetStatusModal && <SetHabitStatusModal />}
      </div>
    )
  }
}

function mapStateToProps(state){
  return state;
}

const ConnectedHabitWeekViewComponent = connect(mapStateToProps)(HabbitWeekView);

export default ConnectedHabitWeekViewComponent;