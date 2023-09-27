document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetTabId = link.getAttribute('data-tab');
            const targetTab = document.getElementById(targetTabId);

            tabContents.forEach(content => {
                content.classList.remove('active-tab');
            });

            tabLinks.forEach(tabLink => {
                tabLink.classList.remove('active');
            });

            link.classList.add('active');
            targetTab.classList.add('active-tab');
        });
    });
});


