import api from './api/your-energy-api';
import modal from './modal';
import iconsSVG from '../img/icons.svg';

function showExersiceInfoModal(exerciseId) {
    fetchExerciseInfoById(exerciseId).then(exerciseInfo => {
        const content = buildExerciseInfoHTML(exerciseInfo);
        const exerciseModal = new modal(content);

        const addToFavoriteBtn = exerciseModal.modal.querySelector(
            '.add-to-favorite-btn'
        );
        const giveRatingBtn =
            exerciseModal.modal.querySelector('.give-rating-btn');

        addToFavoriteBtn.addEventListener('click', e => {
            e.stopPropagation();
            if (isFavorite(exerciseId)) {
                removeFromFavorites(exerciseId);
            } else {
                addToFavorites(exerciseId);
            }
            // Update the button text and icon
            addToFavoriteBtn.innerHTML = getAddedToFavoritesBtnHTML(exerciseId);
        });

        giveRatingBtn.addEventListener('click', () => {
            // Give a rating to the exercise
            console.log('Give a rating');
        });

        exerciseModal.openModal();
    });
}

function buildExerciseInfoHTML(exerciseInfo) {
    return `
        <div class="exercise-info__wrapper">
            <img class="exercise-info__img" src="${exerciseInfo.gifUrl}" alt="${
        exerciseInfo.name
    }" width="270" height="259">
            <div class="exercise-info__content">
                <h3 class="exercise-info__title">${exerciseInfo.name}</h3>
                <div class="exercise-info__rating">
                    ${getRatingStarsHTML(exerciseInfo.rating)}
                </div>
                <ul class="exercise-info__params">
                    ${buildExerciseInfoParamsHTML(exerciseInfo)}
                </ul>
                <p class="exercise-info__description">${
                    exerciseInfo.description
                }</p>
            </div>
            <div class="exercise-info__actions">
                <button class="exercise-info__button add-to-favorite-btn" data-id="${
                    exerciseInfo._id
                }">
                    ${getAddedToFavoritesBtnHTML(exerciseInfo._id)}
                </button>
                <button class="exercise-info__button give-rating-btn">Give a rating</button>
            </div>
        </div>
    `;
}

function buildExerciseInfoParamsHTML(exerciseInfo) {
    const params = [];

    if (exerciseInfo.target) {
        params.push(
            `<li><span>Target</span><span class="details-target">${exerciseInfo.target}</span></li>`
        );
    }

    if (exerciseInfo.bodyPart) {
        params.push(
            `<li><span>Body Part</span><span class="details-calories">${exerciseInfo.bodyPart}</span></li>`
        );
    }

    if (exerciseInfo.equipment) {
        params.push(
            `<li><span>Equipment</span> ${exerciseInfo.equipment}</li>`
        );
    }

    if (exerciseInfo.popularity) {
        params.push(`<li><span>Popular</span> ${exerciseInfo.popularity}</li>`);
    }

    if (exerciseInfo.burnedCalories) {
        params.push(
            `<li><span>Burned Calories</span><span class="details-calories">${exerciseInfo.burnedCalories}</span></li>`
        );
    }

    return params.join('');
}

function getRatingStarsHTML(rating) {
    const stars = [];

    // Format rating text to 1 decimal place
    rating = rating.toFixed(1);

    const ratingInt = Math.floor(rating);
    const ratingDecimal = rating - ratingInt;

    // Add rating text
    const ratingText = `<span class="exercise-info__rating-text">${rating}</span>`;

    // Fill full stars
    for (let i = 0; i < ratingInt; i++) {
        stars.push(
            `<svg width="18" height="18">
                <use class="rating-star__full" href="${iconsSVG}#icon-star-18"></use>
            </svg>`
        );
    }

    // Add half star if rating has decimal part
    if (ratingDecimal > 0) {
        const percent = ratingDecimal * 100;
        stars.push(
            `<svg width="18" height="18">
                <defs>
                    <linearGradient id="myGradient">
                        <stop offset="${percent}%" stop-color="var(--color-stars-full)" />
                        <stop offset="0%" stop-color="var(--color-stars-empty)" />
                    </linearGradient>
                </defs>
                <use class="rating-star" href="${iconsSVG}#icon-star-18" fill="url('#myGradient')"></use>
            </svg>`
        );
    }

    // Fill the rest of the stars with empty stars
    while (stars.length < 5) {
        stars.push(
            `<svg width="18" height="18">
                <use class="rating-star__empty" href="${iconsSVG}#icon-star-18"></use>
            </svg>`
        );
    }

    return `${ratingText}<div class="exercise-info__rating-stars">${stars.join(
        ''
    )}</div>`;
}

function addToFavorites(exerciseId) {
    // Get data from local storage
    const favorites = localStorage.getItem('favorites');
    if (!favorites) {
        // Add exercise to favorites
        localStorage.setItem('favorites', JSON.stringify([exerciseId]));
    } else {
        // Parse favorites
        const favoritesArr = JSON.parse(favorites);

        // Check if exercise is already in favorites
        if (favoritesArr.includes(exerciseId)) {
            return;
        }

        // Add exercise to favorites
        favoritesArr.push(exerciseId);
        localStorage.setItem('favorites', JSON.stringify(favoritesArr));
    }
}

function removeFromFavorites(exerciseId) {
    // Get data from local storage
    const favorites = localStorage.getItem('favorites');
    if (!favorites) {
        return;
    }

    // Parse favorites
    const favoritesArr = JSON.parse(favorites);

    // Remove exercise from favorites
    const updatedFavorites = favoritesArr.filter(id => id !== exerciseId);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

    // Remove exercise from favorites list if it's open
    const favoritesList = document.querySelector('.favorites');
    if (favoritesList) {
        const exerciseCard = favoritesList.querySelector(
            `.exercise-card[data-id="${exerciseId}"]`
        );
        if (exerciseCard) {
            exerciseCard.remove();
        }
    }
}

function isFavorite(exerciseId) {
    // Get data from local storage
    const favorites = localStorage.getItem('favorites');

    if (!favorites) {
        return false;
    }

    const favoritesArr = JSON.parse(favorites);

    return favoritesArr.includes(exerciseId);
}

function getAddedToFavoritesBtnHTML(exerciseId) {
    const isFav = isFavorite(exerciseId);

    return `
        ${isFav ? 'Remove from favorites' : 'Add to favorites'}
        <svg width="20" height="20">
            <use class="modal-close-icon" href="${iconsSVG}#${
        isFav ? 'icon-trash' : 'icon-heart'
    }"></use>
        </svg>
    `;
}

async function fetchExerciseInfoById(id) {
    return await api.getExerciseById(id);
}

export { showExersiceInfoModal, removeFromFavorites };
