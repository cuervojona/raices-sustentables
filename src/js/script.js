document.addEventListener('DOMContentLoaded', () => {
    // Manejo del tema oscuro/claro
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);

    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            const theme = item.getAttribute('data-theme');
            setTheme(theme);
        });
    });

    function setTheme(theme) {
        const body = document.body;
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        const themeIcon = document.querySelector('#darkModeToggle img');

        if (theme === 'dark') {
            body.classList.add('dark-mode');
            header.classList.add('dark-mode');
            footer.classList.add('dark-mode');
            if (window.location.pathname === '/index.html') {
                themeIcon.src = 'src/img/moon-stars-fill.svg';
            } else {
                themeIcon.src = 'img/moon-stars-fill.svg';
            }

        } else {
            body.classList.remove('dark-mode');
            header.classList.remove('dark-mode');
            footer.classList.remove('dark-mode');
            if (window.location.pathname === '/index.html') {
                themeIcon.src = 'src/img/sun-fill.svg';
            } else {
                themeIcon.src = 'img/sun-fill.svg';
            }
        }

        localStorage.setItem('theme', theme);
    }

});