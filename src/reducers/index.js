import { ADD_HABIT, CLOSE_ADD_HABIT_MODAL, DELETE_HABIT, SHOW_ADD_HABIT_MODAL } from "../actions";

// set the initial state for habits
const initialHabitState = {
    habits: [],
    showModal: false
}

// habits reducer
export function habits(state = initialHabitState, action){
  // if action is found return updated state
  switch(action.type){
    case ADD_HABIT:
      return{
        ...state,
        habits: [action.habit, ...state.habits]
      }

    case DELETE_HABIT:
      const updatedHabits = state.habits.filter((habit) => habit.id !== action.habitId);
      return{
        ...state,
        habits: updatedHabits
      }

    case SHOW_ADD_HABIT_MODAL:
      return{
        ...state,
        showModal: true
      }

    case CLOSE_ADD_HABIT_MODAL:
      return{
        ...state,
        showModal: false
      }

    default:
      return state;
  }
}