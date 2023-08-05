import React, { useState } from 'react'
import styles from '../styles/AddHabitModal.module.css';
import { connect } from 'react-redux';
import { addHabit, closeAddHabitModal } from '../actions';
import { toast } from 'react-toastify';
import { appendDay, appendYear, appendMonth } from '../utilities';

let id = 0;

function AddHabitModal(props) {
  const [habitName, setHabitName] = useState('');

  const closeModal = () => {
    props.dispatch(closeAddHabitModal(false));
  };

  const saveHabit = () => {
    if(habitName === ''){
      return toast.error('Habbit cannot be blank!');
    }

    const date = new Date();
    const day = date.getDate() - date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    // console.log(date, day, month, year);

    // create a habit
    const habit = {
      id: id++,
      name: habitName,
      weekLog: [
        {
          id: 0,
          day: "Sunday",
          dd: appendDay(day, month, year),
          mm: appendMonth(day, month, year),
          yyyy: appendYear(day, month, year),
          isDone: "",
        },
        {
          id: 1,
          day: "Monday",
          dd: appendDay(day+1, month, year),
          mm: appendMonth(day+1, month, year),
          yyyy: appendYear(day+1, month, year),
          isDone: "",
        },
        {
          id: 2,
          day: "Tuesday",
          dd: appendDay(day+2, month, year),
          mm: appendMonth(day+2, month, year),
          yyyy: appendYear(day+2, month, year),
          isDone: "",
        },
        {
          id: 3,
          day: "Wednesday",
          dd: appendDay(day+3, month, year),
          mm: appendMonth(day+3, month, year),
          yyyy: appendYear(day+3, month, year),
          isDone: "",
        },
        {
          id: 4,
          day: "Thursday",
          dd: appendDay(day+4, month, year),
          mm: appendMonth(day+4, month, year),
          yyyy: appendYear(day+4, month, year),
          isDone: "",
        },
        {
          id: 5,
          day: "Friday",
          dd: appendDay(day+5, month, year),
          mm: appendMonth(day+5, month, year),
          yyyy: appendYear(day+5, month, year),
          isDone: "",
        },
        {
          id: 6,
          day: "Saturday",
          dd: appendDay(day+6, month, year),
          mm: appendMonth(day+6, month, year),
          yyyy: appendYear(day+6, month, year),
          isDone: "",
        },
      ],
    }

    // console.log(habit);
    props.dispatch(addHabit(habit));
    props.dispatch(closeAddHabitModal(false));
    toast.success('Habit added successfully!');
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.contentHeader}>
          <h2>Add New Habit</h2>
          <i className="fa-solid fa-xmark"  onClick={closeModal} />
        </div>
        <div className={styles.contentBody}>
          <label>Habit name</label>
          <input type='text' value={habitName} onChange={(e) => {setHabitName(e.target.value)}}/>
          <button onClick={saveHabit}>Save Habit</button>
        </div>
      </div>
    </div>
  )
}

// callback function to get state from store
function mapStateToProps(state){
  return state;
}

// connect the component to store to access state
const connectedAddHabitModalComponent = connect(mapStateToProps)(AddHabitModal);

export default connectedAddHabitModalComponent;