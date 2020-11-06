'use strict';

const panels = document.querySelectorAll(`.panel`);

const resetActive = () => {
  panels.forEach((panel) => panel.classList.remove(`open`));
};

const toggleOpen = (evt) => {
  const target = (evt.target.classList.contains(`panel`)) ? evt.target : evt.target.parentElement;
  if (!target.classList.contains(`open`)) {
    resetActive();
  }

  target.classList.toggle(`open`);
};

const toggleActive = (evt) => {
  if (evt.propertyName.includes(`flex`)) {
    evt.target.classList.toggle(`open-active`);
  }
};

panels.forEach((panel) => {
  panel.addEventListener(`click`, toggleOpen);
  panel.addEventListener(`transitionend`, toggleActive);
});
