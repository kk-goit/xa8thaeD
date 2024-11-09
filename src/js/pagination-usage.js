import Pagination from './pagination.js';

const searchPagination = new Pagination(10); // 10 items per page by default
const categoryPagination = new Pagination(15); // 15 items per page by default
const exercisesPagination = new Pagination(20); // 20 items per page by default

// Конфігурація кількості елементів на сторінці для різних форматів
searchPagination.setItemsPerPageConfig({
    desktop: 10,
    tablet: 8,
    mobile: 5,
});

categoryPagination.setItemsPerPageConfig({
    desktop: 15,
    tablet: 10,
    mobile: 7,
});

exercisesPagination.setItemsPerPageConfig({
    desktop: 20,
    tablet: 15,
    mobile: 10,
});

async function fetchDataSearch() {
    // Your fetch data logic for search
}

async function fetchDataCategory() {
    // Your fetch data logic for category
}

async function fetchDataExercises() {
    // Your fetch data logic for exercises
}

// Example usage
searchPagination.renderPagination(50, fetchDataSearch); // 50 total pages
categoryPagination.renderPagination(30, fetchDataCategory); // 30 total pages
exercisesPagination.renderPagination(40, fetchDataExercises); // 40 total pages

// Додайте слухач подій для зміни розміру вікна, щоб оновити кількість елементів на сторінці
window.addEventListener('resize', () => {
    searchPagination.updateItemsPerPage();
    categoryPagination.updateItemsPerPage();
    exercisesPagination.updateItemsPerPage();
});
