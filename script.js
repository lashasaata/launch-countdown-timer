const daysP = document.getElementById("days_p");
const hoursP = document.getElementById("hours_p");
const minutesP = document.getElementById("minutes_p");
const secondsP = document.getElementById("seconds_p");

let daysAmount = Number(daysP.innerText);
let hoursAmount = Number(hoursP.innerText);
let minutesAmount = Number(minutesP.innerText);
let secondsAmount = Number(secondsP.innerText);

function timer() {
  if (secondsAmount == 0 && minutesAmount > 0) {
    secondsAmount = 60;
    minutesAmount -= 1;
  }

  if (minutesAmount == 0 && hoursAmount > 0 && secondsAmount == 0) {
    minutesAmount = 59;
    secondsAmount = 60;
    hoursAmount -= 1;
  }
  if (
    secondsAmount == 0 &&
    minutesAmount == 0 &&
    hoursAmount == 0 &&
    daysAmount > 0
  ) {
    hoursAmount = 23;
    minutesAmount = 59;
    secondsAmount = 60;
    daysAmount -= 1;
  }
  if (
    secondsAmount == 0 &&
    minutesAmount == 0 &&
    hoursAmount == 0 &&
    daysAmount == 0
  ) {
    console.log("happy end!");
    secondsAmount = 0;
  } else {
    secondsAmount -= 1;
  }
  // when number becomes less than 10 0 will added from left side
  if (secondsAmount <= 9) {
    secondsP.innerText = `0${secondsAmount}`;
  } else {
    secondsP.innerText = secondsAmount;
  }
  if (minutesAmount <= 9) {
    minutesP.innerText = `0${minutesAmount}`;
  } else {
    minutesP.innerText = minutesAmount;
  }
  if (hoursAmount <= 9) {
    hoursP.innerText = `0${hoursAmount}`;
  } else {
    hoursP.innerText = hoursAmount;
  }
  if (daysAmount <= 9) {
    daysP.inert = `0${daysAmount}`;
  } else {
    daysP.inert = daysAmount;
  }
}
setInterval(timer, 1000);
