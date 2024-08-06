function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggle.textContent = '🌞';
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggle.textContent = '🌙';
    }
}
