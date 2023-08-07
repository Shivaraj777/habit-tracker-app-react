
// get exact date
export const appendDay = (day, month, year) => {
  const date = new Date(year, month, day);
  // console.log(date);
  return date.getDate(); 
}

// get exact month
export const appendMonth = (day, month, year) => {
  const date = new Date(year, month, day);
  // console.log(date);
  return date.getMonth() + 1; 
}

// get exact year
export const appendYear = (day, month, year) => {
  const date = new Date(year, month, day);
  // console.log(date);
  return date.getFullYear(); 
}

export const padZero = (number) => {
  return number.toString().padStart(2, "0");
}

export const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? " PM" : " AM";

  // Convert hours to 12-hour format and handle midnight (12:00am) and noon (12:00pm)
  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
  }

  return `${month}/${day}/${year} ${hours}:${padZero(minutes)}${period}`;
}

export const getCompletedDaysCount = (habit, count) => {
  for(let i=0;i<habit.weekLog.length;i++){
    if(habit.weekLog[i].isDone === true){
      count++;
    }
  }
  return count;
}

