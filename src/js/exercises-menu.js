import Pagination from './pagination.js';
import { renderGroupListByFilter } from './group-list';
import { resetCurrentPageFilter } from './pagination-exercises';
const buttons = Array.from(document.querySelectorAll('.exercises-menu-button'));

const exercisesPagination = new Pagination();

exercisesPagination.setItemsPerPageConfig({
    desktop: 10,
    tablet: 10,
    mobile: 8,
});

const execisesMenuButtonHandler = element => {
    const sectionTitle = document.querySelector('.section-title');
    const exercisesForm = document.querySelector('.exercises-form');

    sectionTitle.innerHTML = 'Exercises';
    buttons.forEach(el => {
        el.classList.remove('active');
    });
    element.classList.add('active');
    exercisesForm.classList.add('visually-hidden');
    resetCurrentPageFilter(); //Added By Ruslan Isupov Скидання сторінки до 1 при натисканні на фільтр категорії ;
    renderGroupListByFilter({
        filter: element.textContent,
        limit: exercisesPagination.getItemsPerPage(),
    });
};

buttons.forEach(el =>
    el.addEventListener('click', () => execisesMenuButtonHandler(el))
);

window.addEventListener('resize', () => {
    exercisesPagination.updateItemsPerPage();
});
