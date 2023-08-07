import React, { Component } from 'react'
import styles from '../styles/Habit.module.css'
import { deleteHabit } from '../actions';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { getCompletedDaysCount } from '../utilities';

export class Habit extends Component {
  handleDeleteHabit = (habitId) => {
    this.props.dispatch(deleteHabit(habitId));
    toast.success('Habbit deleted successfully');
  }

  render() {
    const {habit} = this.props;
    // console.log(this.props);

    return (
      <div className={styles.habit}>
        <div className={styles.habitDetails}>
          <p>{habit.name}</p>
          <span>Created time: {habit.createdDateTime}</span>
          <span>Completed: {getCompletedDaysCount(habit, 0)}/7 days</span>
        </div>
        <div className={styles.habitActions}>
          <i id={styles.fav} className="fa-solid fa-star"></i>
          <i className="fa-solid fa-trash" onClick={() => {this.handleDeleteHabit(habit.id)}} />
        </div>
      </div>
    );
  }
}

// callback function get state from store
function mapStateToProps(state){
  return state;
}

const connectedHabitComponent = connect(mapStateToProps)(Habit);

export default connectedHabitComponent;