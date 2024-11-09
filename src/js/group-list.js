import api from './api/your-energy-api';
import { findListOfExercises } from './exercises.js';
import Pagination from './pagination.js';
import {
    replaceInnerHtmlWithLoader,
    removeLoaderFromElement,
} from './loader.js';

let activeButtonText = ''; // By Ruslan Isupov Add global variable

const categoryPagination = new Pagination();
categoryPagination.setItemsPerPageConfig({
    desktop: 12,
    tablet: 12,
    mobile: 9,
});

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

        renderGroupListByFilter({
            filter: 'Muscles',
            page: 1,
            limit: categoryPagination.getItemsPerPage(),
        });
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
    limit,
} = {}) => {
    page = categoryPagination.getCurrentPage(); // Added by Ruslan Isupov
    activeButtonText = filter.toLowerCase(); // Take filter and save in global variable "activeButtonText"

    if (activeButtonText === 'body parts') {
        activeButtonText = 'bodypart';
    }

    limit = limit || categoryPagination.getItemsPerPage();

    replaceInnerHtmlWithLoader(document.querySelector('.group-list'));
    const data = await fetchDataByFilter({ filter, page, limit });

    renderGroupList(data.results);
    // Pagination
    categoryPagination.setCurrentPage(page);
    console.group(
        page,
        'renderGroupListByFilter',
        activeButtonText,
        filter,
        data.totalPages
    );
    categoryPagination.renderPagination(
        data.totalPages,
        renderGroupListByFilter,
        activeButtonText
    );
};

window.addEventListener('resize', () => {
    categoryPagination.updateItemsPerPage();
});

// if (container) renderGroupListByFilter();
