const daysP = document.getElementById("days_p");
const hoursP = document.getElementById("hours_p");
const minutesP = document.getElementById("minutes_p");
const secondsP = document.getElementById("seconds_p");

let lunchDate = new Date(`2024-05-31T12:00:00`);
function timer() {
  // THIS IS FIRST WAY TO DO COUNTDOWN
  // if (secondsAmount == 0 && minutesAmount > 0) {
  //   secondsAmount = 60;
  //   minutesAmount -= 1;
  // }

  // if (minutesAmount == 0 && hoursAmount > 0 && secondsAmount == 0) {
  //   minutesAmount = 59;
  //   secondsAmount = 60;
  //   hoursAmount -= 1;
  // }
  // if (
  //   secondsAmount == 0 &&
  //   minutesAmount == 0 &&
  //   hoursAmount == 0 &&
  //   daysAmount > 0
  // ) {
  //   hoursAmount = 23;
  //   minutesAmount = 59;
  //   secondsAmount = 60;
  //   daysAmount -= 1;
  // }
  // if (
  //   secondsAmount == 0 &&
  //   minutesAmount == 0 &&
  //   hoursAmount == 0 &&
  //   daysAmount == 0
  // ) {
  //   console.log("happy end!");
  //   secondsAmount = 0;
  // } else {
  //   secondsAmount -= 1;
  // }
  // AND THAT IS SECOND WAY
  let currentDate = new Date();
  let timeDiff = Math.floor((lunchDate - currentDate) / 1000);

  let secondsAmount = Math.floor(timeDiff % 60);
  let minutesAmount = Math.floor(((timeDiff - secondsAmount) % (60 * 60)) / 60);
  let hoursAmount = Math.floor(
    ((timeDiff - secondsAmount - minutesAmount * 60) % (60 * 60 * 24)) /
      (60 * 60)
  );
  let daysAmount = Math.floor(
    (timeDiff - secondsAmount - minutesAmount * 60 - hoursAmount * 3600) /
      (60 * 60 * 24)
  );

  // when number becomes less than 10, 0 will added from the left side
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
    daysP.innerText = `0${daysAmount}`;
  } else {
    daysP.innerText = daysAmount;
  }
}
setInterval(timer, 1000);
