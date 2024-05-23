const collapseTriggers = document.querySelectorAll('.collapse-trigger');

function toggleCollapse(trigger) {
    const target = document.querySelector(`#${trigger.getAttribute('aria-controls')}`);

    if (target) {
        if (trigger.getAttribute('aria-expanded') === 'false') {
            trigger.setAttribute('aria-expanded', 'true');
            target.setAttribute('aria-expanded', 'true');
        } else if (trigger.getAttribute('aria-expanded') === 'true') {
            trigger.setAttribute('aria-expanded', 'false');
            target.setAttribute('aria-expanded', 'false');
        }
    }
}

function initCollapse() {
    collapseTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            toggleCollapse(trigger);
        });
    });
}

export {initCollapse};