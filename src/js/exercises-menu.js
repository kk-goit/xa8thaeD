export const execisesMenuButtonHandler = (element, buttons) => {
    buttons.forEach(el => {
        el.classList.remove("active");
    });
    element.classList.add("active");
}