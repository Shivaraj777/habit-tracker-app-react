import React, { Component } from 'react'
import styles from '../styles/DetailView.module.css';
import { connect } from 'react-redux';
import { showAddHabitModal } from '../actions';
import AddHabitModal from '../components/AddHabitModal';
import Habit from '../components/Habit';

export class DetailView extends Component {

  handleAddHabit = (e) => {
    this.props.dispatch(showAddHabitModal(true));
  }

  render() {
    const {showAddHabitModal} = this.props;
    const habits = this.props.habits ? this.props.habits : [];
    // console.log(showAddHabitModal);
    // console.log(this.props);

    return (
      <div className={styles.detailView}>
        <button className={styles.addHabitBtn} onClick={this.handleAddHabit}>Add Habit</button>
        {showAddHabitModal && <AddHabitModal /> }

        {habits.map((habit, index) => (
          <Habit habit={habit} key={index} />
        ))}
      </div>
    );
  }
}

// callback function get state from store
function mapStateToProps(state){
  return state;
}

const connectedDetailViewComponent = connect(mapStateToProps)(DetailView);

export default connectedDetailViewComponent;