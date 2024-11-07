import './js/menu.js';
import './js/header.js';
import { execisesMenuButtonHandler } from './js/exercises-menu';

const buttons = Array.from(document.querySelectorAll('.exercises-menu-button'));

buttons.forEach(el =>
    el.addEventListener('click', () => execisesMenuButtonHandler(el, buttons))
);
