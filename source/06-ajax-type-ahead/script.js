'use strict';

// Consts
const END_POINT = `https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json`;
const cities = [];
const startingTemplate = `<li>Filter for a city</li><li>or a state</li>`;

// Utils
const getMatches = (string) => {
  return cities.filter((item) => item.city.toLowerCase().includes(string) || item.state.toLowerCase().includes(string));
};

const getNumberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `,`);
};

const clearNodeChilds = (node) => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};

// Main
const desplayMatches = (matches, value) => {
  const listElement = document.querySelector(`.suggestions`);
  clearNodeChilds(listElement);

  const results = matches
    .map((item) => {
      const regexp = new RegExp(value, `gi`);
      const cityName = item.city.replace(regexp, `<span class="hl">${value}</span>`);
      const stateName = item.state.replace(regexp, `<span class="hl">${value}</span>`);

      return (
        `<li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${getNumberWithCommas(item.population)}</span>
        </li>`
      );
    })
    .join(``);

  listElement.insertAdjacentHTML(`beforeend`, results);
};

const handleSearchInput = (evt) => {
  evt.preventDefault();
  const value = evt.target.value;

  if (value === `` || value === null) {
    const listElement = document.querySelector(`.suggestions`);
    clearNodeChilds(listElement);
    listElement.insertAdjacentHTML(`beforeend`, startingTemplate);
    return;
  }

  const matches = getMatches(value);
  desplayMatches(matches, value);
};

const initSearch = (data) => {
  cities.push(...data);
  const searchInput = document.querySelector(`.search`);
  searchInput.addEventListener(`input`, handleSearchInput);
};

fetch(END_POINT)
  .then((response) => response.json())
  .then((data) => initSearch(data))
  .catch(() => {
    throw new Error(`Something went wrong!`);
  });

