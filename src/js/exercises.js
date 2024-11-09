import {
    renderPaginationButtonsSearch,
    renderPaginationButtonsExercises,
    getCurrentPageSearch,
    getCurrentPageExercises,
    changeFetchMethod,
} from './pagination-exercises.js';
import yourEnergy from './api/your-energy-api.js';
const exercisesForm = document.querySelector('.exercises-form');

// const notFoundTextEl = document.querySelector('.not-found-text');

let limit = 10;
let categoryName = 'muscles';
let categoryValue = '';
let keyword = '';

exercisesForm.addEventListener('submit', handlerSearchFormSubmit);

function handlerSearchFormSubmit(e) {
    e.preventDefault();

    keyword = e.target.elements.search.value.trim();
    console.log(keyword);
    if (!keyword) {
        alert('Please, enter a search words');
        return;
    }
    searchListOfExercises();
    e.target.elements.search.value = '';
}

async function searchListOfExercises() {
    const page = getCurrentPageSearch();
    const listOfExercises = await yourEnergy.getExercises({
        page,
        limit,
        [categoryName]: categoryValue,
        keyword,
    });
    console.group(
        page,
        'searchListOfExercises',
        categoryName,
        categoryValue,
        keyword,
        listOfExercises,
        listOfExercises.totalPages
    );
    renderUserListExercises(listOfExercises.results);
    changeFetchMethod('search');
    renderPaginationButtonsSearch(
        listOfExercises.totalPages,
        searchListOfExercises,
        categoryName,
        categoryValue,
        keyword
    );
}

async function findListOfExercises(catName, catValue) {
    const page = getCurrentPageExercises();
    switch (catName) {
        case 'muscles':
            categoryName = 'muscles';
            break;
        case 'equipment':
            categoryName = 'equipment';
            break;
        // case 'body parts':
        case 'bodypart':
            categoryName = 'bodypart';
            break;
    }
    categoryValue = catValue;
    try {
        const listOfExercises = await yourEnergy.getExercises({
            page,
            limit,
            [categoryName]: categoryValue,
        });

        // if (listOfExercises.results.length === 0) {
        //     clearMarkup();
        //     // console.log("length",listOfExercises.results.length);
        //     return;
        // }

        exercisesForm.classList.remove('visually-hidden');
        console.group(
            page,
            'findListOfExercises',
            categoryName,
            categoryValue,
            listOfExercises,
            listOfExercises.totalPages
        );
        renderUserListExercises(listOfExercises.results);
        changeFetchMethod('exercises');
        renderPaginationButtonsExercises(
            listOfExercises.totalPages,
            findListOfExercises,
            categoryName,
            categoryValue
        );
    } catch (err) {
        clearMarkup();
        console.log(err);
    } finally {
        console.log('Buy');
        // form.reset();
    }
}

const exercises = document.querySelector('.group-list');

function renderUserListExercises(listExercises) {
    const markup = listExercises
        .map(
            exercise => `
<li class="exercise-card" data-id=${exercise._id}>
  <div class="top-row">
  <div class="rating">
        <p class="badge">WORKOUT</p>
        <div class="rating-star">
            <span class='text-star'>${exercise.rating}</span>
           <svg class="star-icon" width="18" height="18">
                    <use href="./img/icons.svg#icon-star-18"></use>
                </svg>
        </div>
        </div>
        <button class="start">
            Start
            <svg class="icon-arrow-right" width="13" height="13">
                    <use href="./img/icons.svg#icon-arrow-right"></use>
                </svg>
        </button>
    </div>
    <div class="exercise-info">
    <div class="icon-wrapper">
    <svg class="arrow-running-icon" width="14" height="16">                     
        <use href="./img/icons.svg#icon-running-stick-figure"></use>
    </svg>
</div>
        <p class="exercise-name">${exercise.name
            .split(' ')
            .slice(0, 2)
            .join(' ')}</p>
    </div>
    <div class="details">
        <p>Burned calories: <span>${exercise.burnedCalories}</span></p>
        <p>Body part: <span>${exercise.bodyPart}</span></p>
        <p>Target: <span>${exercise.target}</span></p>
    </div>
</li>`
        )
        .join('');

    exercises.innerHTML = markup;
}

function clearMarkup() {
    exercises.innerHTML = '';
}

export { findListOfExercises };
