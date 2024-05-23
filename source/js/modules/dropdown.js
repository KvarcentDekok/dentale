const clickableDropdowns = document.querySelectorAll('.dropdown:not(.is-hoverable)',);

function toggleDropdown(evt, dropdown, button, menu) {
    evt.stopPropagation();

    if (dropdown.classList.contains('is-active')) {
        button.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-expanded', 'false');
        dropdown.classList.remove('is-active');
    } else {
        button.setAttribute('aria-expanded', 'true');
        menu.setAttribute('aria-expanded', 'true');
        dropdown.classList.add('is-active');
    }
}

function closeDropdowns() {
    clickableDropdowns.forEach((dropdown) => {
        dropdown.classList.remove('is-active');
    });
}

function initDropdown() {
    if (clickableDropdowns.length > 0) {
        clickableDropdowns.forEach((dropdown) => {
            const button = dropdown.querySelector('button');
            const menu = dropdown.querySelector('.dropdown-menu');

            button.addEventListener('click', (evt) => {
                toggleDropdown(evt, dropdown, button, menu);
            });
        });

        document.addEventListener('click', () => {
            closeDropdowns();
        });
    }
}

export {initDropdown};