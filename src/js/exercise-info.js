import api from './api/your-energy-api';
import modal from './modal';

function showExersiceInfoModal(exerciseId) {
    fetchExerciseInfoById(exerciseId)
        .then((exerciseInfo) => {
            const content = buildExerciseInfoHTML(exerciseInfo);
            const exerciseModal = new modal(content);
            exerciseModal.openModal();
        });
}

function buildExerciseInfoHTML(exerciseInfo) {
    return `
        <div class="exercise-info__wrapper">
            <img class="exercise-info__img" src="${exerciseInfo.gifUrl}" alt="${exerciseInfo.name}">
            <h3 class="exercise-info__title">${exerciseInfo.name}</h3>
            <ul class="exercise-info__params">
                ${buildExerciseInfoParamsHTML(exerciseInfo)}
            </ul>
            <p class="exercise-info__description">${exerciseInfo.description}</p>
            <div class="exercise-info__actions">
            <button class="footer-button add-to-favorite-btn">
                Add to favorite
                <svg width="12" height="12">
                    <use class="modal-close-icon" href="./img/icons.svg#icon-heart"></use>
                </svg>
            </button>
            <button class="footer-button give-rating-btn">Give a rating</button>
        </div>
    `;
}

function buildExerciseInfoParamsHTML(exerciseInfo) {
    const params = [];

    if (exerciseInfo.target) {
        params.push(`<li><span>Target</span> ${exerciseInfo.target}</li>`);
    }

    if (exerciseInfo.bodyPart) {
        params.push(`<li><span>Body Part</span> ${exerciseInfo.bodyPart}</li>`);
    }

    if (exerciseInfo.equipment) {
        params.push(`<li><span>Equipment</span> ${exerciseInfo.equipment}</li>`);
    }

    if (exerciseInfo.popularity) {
        params.push(`<li><span>Popular</span> ${exerciseInfo.popularity}</li>`);
    }

    if (exerciseInfo.burnedCalories) {
        params.push(`<li><span>Burned Calories</span> ${exerciseInfo.burnedCalories}</li>`);
    }

    return params.join('');
}

async function fetchExerciseInfoById(id) {
    return await api.getExerciseById(id);
}

export default showExersiceInfoModal;