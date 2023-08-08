import React, { useState } from 'react'
import { connect } from 'react-redux';
import styles from '../styles/SetHabitStatusModal.module.css';
import { setStatusToDone, setStatusToNone, setStatusToNotDone, showSetStatusModal } from '../actions';
import { toast } from 'react-toastify';

// SetHabitStatusModal component used in Week view
function SetHabitStatusModal(props) {
  const [habitStatus, setHabitStatus] = useState('None'); //state to set the status of each day

  // handle updating the habit status for a day
  const handleUpdateStatus = () => {
    console.log(habitStatus);

    try{
      const dayId = localStorage.getItem('habit-day-id'); //ge habit day id from local storage

      // dispatch appropriate action bases on selected status
      if(habitStatus === 'None'){
        props.dispatch(setStatusToNone(dayId)); //update to none
      }else if(habitStatus === 'Done'){
        props.dispatch(setStatusToDone(dayId)); //update to done
      }else{
        props.dispatch(setStatusToNotDone(dayId)); //update to not done
      }

      props.dispatch(showSetStatusModal(false)); //close the modal
      toast.success('Status updated successfully'); //success notification
    }catch(e){
      toast.error('Error in updating habit status of selected day'); //error notification
    }
  }

  // handle closing the modal
  const closeModal = () => {
    props.dispatch(showSetStatusModal(false));
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.contentHeader}>
          <h2>Set Habit Status</h2>
          <i className="fa-solid fa-xmark"  onClick={closeModal} />
        </div>
        <div className={styles.contentBody}>
          <label>Please set the status</label>
          <select name='habit-status' value={habitStatus} onChange={(e) => setHabitStatus(e.target.value)}>
            <option value='None'>None</option>
            <option value='Done'>Done</option>
            <option value='Not Done'>Not Done</option>
          </select>
          <button onClick={handleUpdateStatus}>Save Status</button>
        </div>
      </div>
    </div>
  )
}

// callback function to access state from store
function mapStateToProps(state){
  return state;
}

// connect component to store
const ConnectedSetHabitStatusModalComponent = connect(mapStateToProps)(SetHabitStatusModal);

// export the component
export default ConnectedSetHabitStatusModalComponent;