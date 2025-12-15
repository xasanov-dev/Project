const date = new Date();

const day = date.getDate();
const year = date.getFullYear();

const weekdays = [
  "Sunday","Monday","Tuesday",
  "Wednesday","Thursday","Friday","Saturday"
];

const months = [
  "January","February","March","April",
  "May","June","July","August",
  "September","October","November","December"
];

document.getElementById("day").innerText = day;
document.getElementById("weekday").innerText = weekdays[date.getDay()];
document.getElementById("month").innerText = months[date.getMonth()];
document.getElementById("year").innerText = year;