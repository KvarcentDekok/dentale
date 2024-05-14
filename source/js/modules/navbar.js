const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

function initNavbar() {
    navbarBurgers.forEach(element => {
        element.addEventListener('click', () => {
            const target = element.dataset.target;
            const targetElement = document.getElementById(target);

            element.classList.toggle('is-active');
            targetElement.classList.toggle('is-active');
        });
    });
}

export {initNavbar};