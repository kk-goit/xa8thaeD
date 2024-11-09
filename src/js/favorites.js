import {
    replaceInnerHtmlWithLoader,
    removeLoaderFromElement,
} from './loader.js';
import yourEnergy from './api/your-energy-api.js';

const favorites = document.querySelector('.favorites');

const paginationContainer = document.querySelector('.pagination');
const exercisesPerPage = 10;
let currentPage = 1;

async function renderExercisesPage(favoritesList, page = 1) {
    const startIndex = (page - 1) * exercisesPerPage;
    const endIndex = startIndex + exercisesPerPage;
    const currentExercises = favoritesList.slice(startIndex, endIndex);

    if (!currentExercises.length) {
        favorites.innerHTML =
            "<p class='no-favorites'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>";
        return;
    }
    try {
        const retrievedExercises = await yourEnergy.getExercisesByIdList(
            currentExercises
        );

        const markup = retrievedExercises
            .map(
                exercise => `
<li class="exercise-card" data-id=${exercise._id}>
  <div class="top-row">
    <div class="rating">
        <p class="badge">WORKOUT</p>
        <button class="delete-btn" onclick="removeExercise('${exercise._id}')">
            <svg class="trash-icon" width="18" height="18">
                <use href="./img/icons.svg#icon-trash"></use>
            </svg>
        </button>
    </div>
    <button class="start">
        Start
        <svg class="icon-arrow-right" width="13" height="13">
            <use href="./img/icons.svg#icon-arrow-right"></use>
        </svg>
    </button>
  </div>
  <div class="exercise-info">
    <svg class="arrow-running-icon" width="24" height="24">
        <use href="./img/icons.svg#icon-running-stick-figure"></use>
    </svg>
    <p class="exercise-name">${exercise.name
        .split(' ')
        .slice(0, 2)
        .join(' ')}</p>
  </div>
  <div class="details">
    <p>Burned calories: <strong>${exercise.burnedCalories}</strong></p>
    <p>Body part: <strong>${exercise.bodyPart}</strong></p>
    <p>Target: <strong>${exercise.target}</strong></p>
  </div>
</li>`
            )
            .join('');
        // favorites.insertAdjacentHTML('beforeend', markup);
        favorites.innerHTML = markup;
    } finally {
        removeLoaderFromElement(favorites);
    }
}

function renderPagination(favoritesList) {
    const pageCount = Math.ceil(favoritesList.length / exercisesPerPage);
    let paginationMarkup = '';

    for (let i = 1; i <= pageCount; i++) {
        paginationMarkup += `
            <button class="pagination-button ${
                i === currentPage ? 'active' : ''
            }" data-page="${i}">
                ${i}
            </button>
        `;
    }

    paginationContainer.innerHTML = paginationMarkup;

    document.querySelectorAll('.pagination-button').forEach(button => {
        button.addEventListener('click', () => {
            currentPage = Number(button.dataset.page);
            renderExercisesPage(favoritesList, currentPage);
            renderPagination(favoritesList);
        });
    });
}

function renderUserListFavorites(listFavorites) {
    renderExercisesPage(listFavorites, currentPage);
    renderPagination(listFavorites);
}

function removeExercise(exerciseId) {
    let favoriteExercises = JSON.parse(localStorage.getItem('favorites'));

    favoriteExercises = favoriteExercises.filter(
        exercise => exercise._id !== exerciseId
    );

    localStorage.setItem('favorites', JSON.stringify(favoriteExercises));

    document.querySelector(`.exercise-card[data-id="${exerciseId}"]`).remove();
}

const favoriteExercises = JSON.parse(localStorage.getItem('favorites'));
console.log('favoriteExercises', favoriteExercises);

if (favoriteExercises && Array.isArray(favoriteExercises)) {
    replaceInnerHtmlWithLoader(favorites);
    renderUserListFavorites(favoriteExercises);
} else {
    favorites.innerHTML =
        "<p class='no-favorites'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>";
}
