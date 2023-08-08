import React, { useState } from 'react'
import styles from '../styles/AddHabitModal.module.css';
import { connect } from 'react-redux';
import { addHabit, showAddHabitModal } from '../actions';
import { toast } from 'react-toastify';
import { appendDay, appendYear, appendMonth, formatDate } from '../utilities';

// used to set the id for each habit by incrementing it
let id = 0;

// AddHabitModal component
function AddHabitModal(props) {
  const [habitName, setHabitName] = useState(''); // state to set the habit name

  // function to close the AddHabitModal
  const closeModal = () => {
    props.dispatch(showAddHabitModal(false));
  };

  // function to create/save habit
  const saveHabit = () => {
    // if habitName is blank, don't create habit
    if(habitName === ''){
      return toast.error('Habbit cannot be blank!');
    }

    try{
      const date = new Date();  //get today's date
      const day = date.getDate() - date.getDay();  //store the first day of the week
      const month = date.getMonth();  //get date month
      const year = date.getFullYear();  //get date year
      // console.log(date, day, month, year);

      // create a habit
      const habit = {
        id: id++,
        name: habitName,
        createdDateTime : formatDate(date),
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
      props.dispatch(addHabit(habit)); //dispatch action to update new habit in habits state
      props.dispatch(showAddHabitModal(false)); //dispatch action to close the modal after habit creation
      toast.success('Habit created successfully!'); //show success notification
    }catch(e){
      toast.error('Error in creating habit');
    }
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.contentHeader}>
          <h2>Add New Habit</h2>
          <i className="fa-solid fa-xmark" onClick={closeModal} />
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

// connect the component to store
const connectedAddHabitModalComponent = connect(mapStateToProps)(AddHabitModal);

// export the component
export default connectedAddHabitModalComponent;