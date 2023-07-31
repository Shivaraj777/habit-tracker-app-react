
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