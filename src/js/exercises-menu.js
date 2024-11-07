import { renderGroupListByFilter } from './group-list';

const buttons = Array.from(document.querySelectorAll('.exercises-menu-button'));

const execisesMenuButtonHandler = (element) => {
    const sectionTitle = document.querySelector(".section-title");
    sectionTitle.innerHTML = "Exercises";
    buttons.forEach(el => {
        el.classList.remove("active");
    });
    element.classList.add("active");

    renderGroupListByFilter({ filter: element.textContent })
}

buttons.forEach(el =>
    el.addEventListener('click', () => execisesMenuButtonHandler(el))
);