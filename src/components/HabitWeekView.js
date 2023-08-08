import React, { Component } from 'react';
import styles from '../styles/HabitWeekView.module.css';
import SetHabitStatusModal from './SetHabitStatusModal';
import { connect } from 'react-redux';
import { showSetStatusModal } from '../actions';
import '../styles/imageStyle.css';
import { toast } from 'react-toastify';
import { getCompletedDaysCount } from '../utilities';


// HabitWeekView component displays the weekly status of each habit
export class HabitWeekView extends Component {

  // handle set status operation
  handleSetStatus = (habitId, day) => {
    const today = new Date(); //get today's date
    const date = new Date(day.yyyy, day.mm-1, day.dd); //get habit day which has to be updated

    // if habit date is greater than current date, don't update habit status
    if(date > today){
      return toast.error('You cannot change next days status!');
    }

    // store the contents of habit to be updated in LS
    localStorage.setItem('habit-id', habitId); //store habit id in local storage
    localStorage.setItem('habit-day-id', day.id); //store the habit day id in local storage

    // dispatch action to show setStatus modal
    this.props.dispatch(showSetStatusModal(true));
  }

  render() {
    // get the state from props
    const {habit, showModal} = this.props;
    const showSetStatusModal = showModal;

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

        {/* days container */}
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

        {/* modal component */}
        {showSetStatusModal && <SetHabitStatusModal />}
      </div>
    )
  }
}

// callback function to access the store state
function mapStateToProps(state){
  return state;
}

// connect component to store
const ConnectedHabitWeekViewComponent = connect(mapStateToProps)(HabitWeekView);

// export the component
export default ConnectedHabitWeekViewComponent;