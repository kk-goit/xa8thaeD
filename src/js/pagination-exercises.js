let currentPage = 1;
function setCurrentPage(page) {
    currentPage = page;
}

function getCurrentPage() {
    return currentPage;
}

async function renderPaginationButtons(
    totalPages,
    fetchDataFunction,
    ...fetchDataParams
) {
    // console.log(...fetchDataParams);
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    const prevButton = createPrevButton();
    pagination.appendChild(prevButton);

    const maxVisibleButtons = 5;
    let startPage = Math.max(
        1,
        currentPage - Math.floor(maxVisibleButtons / 2)
    );
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);
    if (endPage - startPage + 1 < maxVisibleButtons) {
        startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    if (startPage > 1) {
        addPageButton(1);
        if (startPage > 2) {
            addEllipsis();
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        addPageButton(i);
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            addEllipsis();
        }
        addPageButton(totalPages);
    }

    const nextButton = createNextButton();
    pagination.appendChild(nextButton);

    function addPageButton(pageNumber) {
        const button = document.createElement('button');
        button.textContent = pageNumber;
        button.classList.add('page-button');
        if (pageNumber === currentPage) {
            button.classList.add('active');
        }
        button.addEventListener('click', async () => {
            setCurrentPage(pageNumber);
            // await fetchDataFunction(currentPage, ...fetchDataParams);
            await fetchDataFunction(...fetchDataParams);
            renderPaginationButtons(
                totalPages,
                fetchDataFunction,
                ...fetchDataParams
            );
            fetchDataParams = '';
        });
        pagination.appendChild(button);
    }

    function addEllipsis() {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        ellipsis.classList.add('ellipsis');
        pagination.appendChild(ellipsis);
    }

    function createPrevButton() {
        const prevButton = document.createElement('button');
        prevButton.innerHTML = '←';
        prevButton.classList.add('page-button');
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', async () => {
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
                // await fetchDataFunction(currentPage, ...fetchDataParams); // Pass currentPage and additional params
                await fetchDataFunction(...fetchDataParams);
                renderPaginationButtons(
                    totalPages,
                    fetchDataFunction,
                    ...fetchDataParams
                );
                fetchDataParams = '';
            }
        });
        return prevButton;
    }

    function createNextButton() {
        const nextButton = document.createElement('button');
        nextButton.innerHTML = '→';
        nextButton.classList.add('page-button');
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', async () => {
            if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
                // await fetchDataFunction(currentPage, ...fetchDataParams);
                await fetchDataFunction(...fetchDataParams);
                renderPaginationButtons(
                    totalPages,
                    fetchDataFunction,
                    ...fetchDataParams
                );
                fetchDataParams = '';
            }
        });
        return nextButton;
    }
}

export { renderPaginationButtons, getCurrentPage };
