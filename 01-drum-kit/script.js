'use strict';

const keyDownHandler = (evt) => {
  const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${evt.keyCode}"]`);

  if (!audio) {
    return;
  }

  audio.currentTime = 0;
  audio.play();
  key.classList.add(`playing`);
};

const transitionendHandler = (evt) => {
  if (evt.propertyName !== `transform`) {
    return;
  }

  evt.target.classList.remove(`playing`);
};

const keys = document.querySelectorAll(`.key`);
keys.forEach((item) => item.addEventListener(`transitionend`, transitionendHandler));
window.addEventListener(`keydown`, keyDownHandler);
