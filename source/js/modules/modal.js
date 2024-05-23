function openModal(element) {
    element.classList.add('is-active');
    element.setAttribute('aria-hidden', 'false');
}

function closeModal(element) {
    element.classList.remove('is-active');
    element.setAttribute('aria-hidden', 'true');
}

function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach((modal) => {
        closeModal(modal);
    });
}

function initModal() {
    (document.querySelectorAll('.js-modal-trigger') || []).forEach((trigger) => {
        const modalId = trigger.getAttribute('aria-controls');
        const target = document.querySelector(`#${modalId}`);

        trigger.addEventListener('click', () => {
            openModal(target);
        });
    });

    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach((close) => {
        const target = close.closest('.modal');

        close.addEventListener('click', () => {
            closeModal(target);
        });
    });

    document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
            closeAllModals();
        }
    });
}

export {initModal};