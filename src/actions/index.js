// action types
export const ADD_HABIT = 'ADD_HABIT';
export const SHOW_ADD_HABIT_MODAL = 'SHOW_ADD_HABIT_MODAL';
export const CLOSE_ADD_HABIT_MODAL = 'CLOSE_ADD_HABIT_MODAL';

// add habit action creator
export const addHabit = (habit) => {
  return {
    type: ADD_HABIT,
    habit
  }
}

// action creator to show the add habit modal
export const showAddHabitModal = (showModal) => {
  return {
    type: SHOW_ADD_HABIT_MODAL,
    showModal
  }
}

// action creator to close the add habit modal
export const closeAddHabitModal = (showModal) => {
  return {
    type: CLOSE_ADD_HABIT_MODAL,
    showModal
  }
}