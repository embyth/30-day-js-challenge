'use strict';

const checkRotateDebounce = (currentDegrees, node) => {
  if (currentDegrees === 90) {
    node.style.transition = `none`;
  } else {
    node.style.transition = ``;
  }
};

const setDate = () => {
  const secondHand = document.querySelector(`.second-hand`);
  const minutesHand = document.querySelector(`.min-hand`);
  const hoursHand = document.querySelector(`.hour-hand`);

  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 24) * 360) + 90;

  checkRotateDebounce(secondsDegrees, secondHand);
  checkRotateDebounce(minutesDegrees, minutesHand);
  checkRotateDebounce(hoursDegrees, hoursHand);

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
};

setInterval(setDate, 1000);
