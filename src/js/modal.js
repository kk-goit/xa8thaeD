class Modal {
    constructor(content) {
        this.backdrop = document.createElement('div');
        this.backdrop.classList.add('backdrop');

        this.modal = document.createElement('div');
        this.modal.classList.add('modal');

        this.content = document.createElement('div');
        this.content.classList.add('modal-content');
        this.content.innerHTML = content;

        this.closeButton = document.createElement('button');
        this.closeButton.innerHTML = ` 
        <svg width="12" height="12">
            <use class="modal-close-icon" href="./img/icons.svg#icon-close-modal"></use>
        </svg>
    `;
        this.closeButton.classList.add('close-modal-btn');

        this.modal.appendChild(this.content);
        this.modal.appendChild(this.closeButton);
        this.backdrop.appendChild(this.modal);

        this.handleClose = this.closeModal.bind(this);

        // Add event listener to close modal when clicking on close button
        this.closeButton.addEventListener('click', this.handleClose);

        // Add event listener to close modal when clicking on backdrop
        this.backdrop.addEventListener('click', this.handleClose);

        // Add event listener to close modal when pressing the ESC key
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') this.closeModal(event);
        });

        document.body.appendChild(this.backdrop);
    }

    openModal() {
        
        // Avoid scrollbar jumping  when modal is opened
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        
        document.body.classList.add('modal-no-scroll');
        this.backdrop.classList.add('is-open');
    }

    closeModal(event) {
        // Prevent closing modal when clicking on the content
        const el = event.target;
        if (el.closest('.modal-content')) {
            return;
        }

        // Remove event listeners
        this.closeButton.removeEventListener('click', this.handleClose);
        this.backdrop.removeEventListener('click', this.handleClose);
        document.removeEventListener('keydown', this.handleClose);

        // Remove modal from the DOM
        this.backdrop.classList.remove('is-open');
        this.backdrop.remove();

        document.body.classList.remove('modal-no-scroll');
        document.body.style.paddingRight = '';
    }
}

export default Modal;
