import { renderGroupListByFilter } from './group-list';

export const execisesMenuButtonHandler = (element, buttons) => {
    buttons.forEach(el => {
        el.classList.remove("active");
    });
    element.classList.add("active");

    renderGroupListByFilter({ filter: element.textContent })
}