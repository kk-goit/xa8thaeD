import api from './api/your-energy-api';
import { findListOfExercises } from './exercises.js';
import {
    renderPaginationButtons,
    getCurrentPage,
} from './pagination-exercises.js';
let activeButtonText = ''; // By Ruslan Isupov Add global variable

// const container = document.querySelector('.group-list');
// const sectionTitle = document.querySelector(".section-title");

// container.addEventListener('click', (event) => {
//   const element = event.target.closest('.group-list__item');
//   if (element) {
//     console.log(element.dataset.name)
//     // TODO you can call to open all exercises here
//     sectionTitle.innerHTML = `Exercises / <span class='exercises-category'>${element.dataset.name}</span>`
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.group-list');
    const sectionTitle = document.querySelector('.section-title');

    if (container) {
        container.addEventListener('click', event => {
            const element = event.target.closest('.group-list__item');
            if (element) {
                // console.log('catValue', element.dataset.name);
                findListOfExercises(activeButtonText, element.dataset.name); //Added by Ruslan Isupov click card and make a request from server;
                sectionTitle.innerHTML = `Exercises / <span class='exercises-category'>${element.dataset.name}</span>`;
            }
        });

        renderGroupListByFilter();
    } else {
        console.warn('Елемент .group-list не знайдено.');
    }
});

const getGroupItemHTMLString = ({ filter, name, imgURL }) =>
    `
    <div
      class="group-list__item"
      data-name="${name}"
    >
      <img
        class="group-list__item-image"
        src="${imgURL}"
      >
      <div class="group-list__item-image-filter"></div>
      <div class="group-list__item-title">
        ${name}
      </div>
      <div class="group-list__item-subtitle">
        ${filter}
      </div>
    </div>
  `;

const getGroupListHTMLString = categoryList => {
    return categoryList.map(getGroupItemHTMLString).join('');
};

const renderGroupList = categoryList => {
    const container = document.querySelector('.group-list'); // Added by Inna Boiko
    if (!container) return; // if no container, do nothing
    const categoryListHTMLString = getGroupListHTMLString(categoryList);
    container.innerHTML = categoryListHTMLString;
};

const fetchDataByFilter = async params => {
    return await api.getExercisesByFilter(params);
};

export const renderGroupListByFilter = async ({
    filter = 'Muscles',
    page = 1,
    limit = 12,
} = {}) => {
    const data = await fetchDataByFilter({ filter, page, limit });

    page = getCurrentPage(); // Added  by Ruslan Isupov
    activeButtonText = filter.toLowerCase(); // Take filter and save in global variable "activeButtonText"
    renderGroupList(data.results);
    //  Pagination
    renderPaginationButtons(
        data.totalPages,
        renderGroupListByFilter,
        activeButtonText
    );
};

// if (container) renderGroupListByFilter();