class Pagination {
    constructor(defaultItemsPerPage = 10) {
        this.currentPage = 1;
        this.itemsPerPage = defaultItemsPerPage;
        this.itemsPerPageConfig = {
            desktop: defaultItemsPerPage,
            tablet: defaultItemsPerPage,
            mobile: defaultItemsPerPage,
        };
    }

    setCurrentPage(page) {
        this.currentPage = page;
    }

    getCurrentPage() {
        return this.currentPage;
    }

    resetCurrentPage() {
        this.currentPage = 1;
    }

    setItemsPerPageConfig(config) {
        this.itemsPerPageConfig = config;
        this.updateItemsPerPage();
    }

    updateItemsPerPage() {
        const width = window.innerWidth;
        if (width >= 1024) {
            this.itemsPerPage = this.itemsPerPageConfig.desktop;
        } else if (width >= 768) {
            this.itemsPerPage = this.itemsPerPageConfig.tablet;
        } else {
            this.itemsPerPage = this.itemsPerPageConfig.mobile;
        }
    }

    async renderPagination(totalPages, fetchDataFunction, ...fetchDataParams) {
        this.updateItemsPerPage();
        const pagination = document.querySelector('.pagination');
        pagination.innerHTML = '';

        const currentPage = this.getCurrentPage();

        const prevButton = this.createPrevButton(
            fetchDataFunction,
            totalPages,
            ...fetchDataParams
        );
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
            this.addPageButton(
                1,
                fetchDataFunction,
                totalPages,
                ...fetchDataParams
            );
            if (startPage > 2) {
                this.addEllipsis();
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            this.addPageButton(
                i,
                fetchDataFunction,
                totalPages,
                ...fetchDataParams
            );
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                this.addEllipsis();
            }
            this.addPageButton(
                totalPages,
                fetchDataFunction,
                totalPages,
                ...fetchDataParams
            );
        }

        const nextButton = this.createNextButton(
            fetchDataFunction,
            totalPages,
            ...fetchDataParams
        );
        pagination.appendChild(nextButton);
    }

    addPageButton(
        pageNumber,
        fetchDataFunction,
        totalPages,
        ...fetchDataParams
    ) {
        const button = document.createElement('button');
        button.textContent = pageNumber;
        button.classList.add('page-button');
        if (pageNumber === this.currentPage) {
            button.classList.add('active');
        }
        button.addEventListener('click', async () => {
            this.setCurrentPage(pageNumber);
            await fetchDataFunction(...fetchDataParams);
            this.renderPagination(
                totalPages,
                fetchDataFunction,
                ...fetchDataParams
            );
        });
        document.querySelector('.pagination').appendChild(button);
    }

    addEllipsis() {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        ellipsis.classList.add('ellipsis');
        document.querySelector('.pagination').appendChild(ellipsis);
    }

    createPrevButton(fetchDataFunction, totalPages, ...fetchDataParams) {
        const prevButton = document.createElement('button');
        prevButton.innerHTML = '←';
        prevButton.classList.add('page-button');
        prevButton.disabled = this.currentPage === 1;
        prevButton.addEventListener('click', async () => {
            if (this.currentPage > 1) {
                this.setCurrentPage(this.currentPage - 1);
                await fetchDataFunction(...fetchDataParams);
                this.renderPagination(
                    totalPages,
                    fetchDataFunction,
                    ...fetchDataParams
                );
            }
        });
        return prevButton;
    }

    createNextButton(fetchDataFunction, totalPages, ...fetchDataParams) {
        const nextButton = document.createElement('button');
        nextButton.innerHTML = '→';
        nextButton.classList.add('page-button');
        nextButton.disabled = this.currentPage === totalPages;
        nextButton.addEventListener('click', async () => {
            if (this.currentPage < totalPages) {
                this.setCurrentPage(this.currentPage + 1);
                await fetchDataFunction(...fetchDataParams);
                this.renderPagination(
                    totalPages,
                    fetchDataFunction,
                    ...fetchDataParams
                );
            }
        });
        return nextButton;
    }
}

export default Pagination;
