export const execisesMenuButtonHandler = (element, buttons, title) => {

    buttons.forEach(el => {
        el.classList.remove("active");
    });
    element.classList.add("active");
}