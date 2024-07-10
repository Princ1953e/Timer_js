let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sc");
let day = document.getElementById("day");

const data = () => {
  let days = prompt("Enter The Value Of day", "Days");
  let hours = prompt("Enter The Value Of Hour", "Hour");
  let minites = prompt("Enter The Value Of Minites", "Minites");
  let secound = prompt("Enter The Value Of Secound", "Secound");

  setInterval(() => {
    secound--;
    sec.innerHTML = secound;

    if (secound <= 0) {
      minites--;
      secound = 60;
    }
    if (minites <= 0) {
      hours--;
      minites = 60;
    }
    if (hours <= 0) {
      days--;
      hours = 24;
    }
    hour.innerHTML = hours;
    day.innerHTML = days;
    min.innerHTML = minites;
  }, 1000);

  // return false;
};
data();
