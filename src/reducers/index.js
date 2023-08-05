import { ADD_HABIT, CLOSE_ADD_HABIT_MODAL, CLOSE_SET_STATUS_MODAL, DELETE_HABIT, HABIT_STATUS_DONE, HABIT_STATUS_NONE, HABIT_STATUS_NOTDONE, SHOW_ADD_HABIT_MODAL, SHOW_SET_STATUS_MODAL } from "../actions";

// set the initial state for habits
const initialHabitState = {
    habits: [],
    showAddHabitModal: false,
    showSetStatusModal: false
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
        showAddHabitModal: true
      }

    case CLOSE_ADD_HABIT_MODAL:
      return{
        ...state,
        showAddHabitModal: false
      }

    case SHOW_SET_STATUS_MODAL:
      return{
        ...state,
        showSetStatusModal: true
      }

    case CLOSE_SET_STATUS_MODAL:
      return{
        ...state,
        showSetStatusModal: false
      }

    case HABIT_STATUS_NONE:
      const tempHabits1 = state.habits;
      for(let i=0;i<tempHabits1.length;i++){
        if(tempHabits1[i].id === Number(localStorage.getItem('habit-id'))){
          tempHabits1[i].weekLog[action.dayId].isDone = '';
        }
      }
      return{
        ...state,
        habits: tempHabits1
      }

    case HABIT_STATUS_DONE:
      const tempHabits2 = state.habits;
      for(let i=0;i<tempHabits2.length;i++){
        if(tempHabits2[i].id === Number(localStorage.getItem('habit-id'))){
          tempHabits2[i].weekLog[action.dayId].isDone = true;
        }
      }
      return{
        ...state,
        habits: tempHabits2
      }

    case HABIT_STATUS_NOTDONE:
      const tempHabits3 = state.habits;
      for(let i=0;i<tempHabits3.length;i++){
        if(tempHabits3[i].id === Number(localStorage.getItem('habit-id'))){
          tempHabits3[i].weekLog[action.dayId].isDone = false;
        }
      }
      return{
        ...state,
        habits: tempHabits3
      }

    default:
      return state;
  }
}