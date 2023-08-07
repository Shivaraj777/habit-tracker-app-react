import React, { useState } from 'react'
import { connect } from 'react-redux';
import styles from '../styles/SetHabitStatusModal.module.css';
import { setStatusToDone, setStatusToNone, setStatusToNotDone, showSetStatusModal } from '../actions';
import { toast } from 'react-toastify';

function SetHabitStatusModal(props) {
  const [habitStatus, setHabitStatus] = useState('None');

  const handleUpdateStatus = () => {
    console.log(habitStatus);
    const dayId = localStorage.getItem('habit-day-id');
    if(habitStatus === 'None'){
      props.dispatch(setStatusToNone(dayId));
    }else if(habitStatus === 'Done'){
      props.dispatch(setStatusToDone(dayId));
    }else{
      props.dispatch(setStatusToNotDone(dayId));
    }

    props.dispatch(showSetStatusModal(false));
    toast.success('Status updated successfully');
  }

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

function mapStateToProps(state){
  return state;
}

const ConnectedSetHabitStatusModalComponent = connect(mapStateToProps)(SetHabitStatusModal);

export default ConnectedSetHabitStatusModalComponent;