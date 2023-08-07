import React, { Component } from 'react';
import styles from '../styles/WeekView.module.css';
import SetHabitStatusModal from '../components/SetHabitStatusModal';
import { connect } from 'react-redux';
import { showSetStatusModal } from '../actions';
import '../styles/imageStyle.css';
import { toast } from 'react-toastify';
import { getCompletedDaysCount } from '../utilities';

export class HabbitWeekView extends Component {

  handleSetStatus = (habitId, day) => {
    const today = new Date();
    const date = new Date(day.yyyy, day.mm-1, day.dd);
    if(date > today){
      return toast.error('You cannot change next days status!');
    }

    localStorage.setItem('habit-id', habitId);
    localStorage.setItem('habit-day-id', day.id);
    this.props.dispatch(showSetStatusModal(true));
  }

  render() {
    const {habit, showSetStatusModal} = this.props;

    return (
      <div className={styles.habitContainer}>
        <div className={styles.habitDetails}>
          <span className={styles.habitName}>{habit.name}</span>
          <div className={styles.sideInfo}>
            <span>{habit.createdDateTime}</span>
            <span>{getCompletedDaysCount(habit, 0)}/7</span>
            <i id={styles.fav} className="fa-solid fa-star"></i>
          </div>
        </div>
        <div className={styles.daysContainer}>
          {habit.weekLog.map((day, index) => (
              <div key={index} onClick={() => this.handleSetStatus(habit.id, day)}>
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