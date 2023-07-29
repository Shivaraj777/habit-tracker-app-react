import React, { useState } from 'react'
import styles from '../styles/AddHabitModal.module.css';
import { connect } from 'react-redux';
import { addHabit, closeAddHabitModal } from '../actions';
import { toast } from 'react-toastify';

let id = 0;

function AddHabitModal(props) {
  const [habitName, setHabitName] = useState('');

  const closeModal = () => {
    props.dispatch(closeAddHabitModal(false));
  };

  const saveHabit = () => {
    if(habitName === ''){
      return;
    }

    const date = new Date()
    const day = date.getDate() - date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    console.log(date, day, month, year);

    // create a habit
    const habit = {
      id: id++,
      name: habitName,
      weekLog: [
        {
          id: 0,
          day: "Sunday",
          dd:day,
          mm:month,
          yyyy:year,
          isDone: "",
        },
        {
          id: 1,
          day: "Monday",
          dd:day+1,
          mm:month,
          yyyy:year,
          isDone: "",
        },
        {
          id: 2,
          day: "Tuesday",
          dd:day+2,
          mm:month,
          yyyy:year,
          isDone: "",
        },
        {
          id: 3,
          day: "Wednesday",
          dd:day+3,
          mm:month,
          yyyy:year,
          isDone: "",
        },
        {
          id: 4,
          day: "Thursday",
          dd:day+4,
          mm:month,
          yyyy:year,
          isDone: "",
        },
        {
          id: 5,
          day: "Friday",
          dd:day+5,
          mm:month,
          yyyy:year,
          isDone: "",
        },
        {
          id: 6,
          day: "Saturday",
          dd:day+6,
          mm:month,
          yyyy:year,
          isDone: "",
        },
      ],
    }

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