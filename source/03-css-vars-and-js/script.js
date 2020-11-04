'use strict';

const inputs = document.querySelectorAll(`.controls input`);

const handleUpdate = (evt) => {
  const target = evt.target;
  const suffix = target.dataset.sizing || ``;
  document.documentElement.style.setProperty(`--${target.name}`, target.value + suffix);
};

inputs.forEach((input) => input.addEventListener(`change`, handleUpdate));
inputs.forEach((input) => input.addEventListener(`mousemove`, handleUpdate));
