// Theme switching
const themeRadios = document.querySelectorAll('input[name="theme"]');
themeRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        const root = document.documentElement;
        if (this.value === 'default') {
            root.style.setProperty('--bg-color', '#fce4ec');
            root.style.setProperty('--text-color', '#333');
            root.style.setProperty('--button-color', '#e91e63');
        } else if (this.value === 'dark') {
            root.style.setProperty('--bg-color', '#333');
            root.style.setProperty('--text-color', '#fff');
            root.style.setProperty('--button-color', '#555');
        } else if (this.value === 'white') {
            root.style.setProperty('--bg-color', '#fff');
            root.style.setProperty('--text-color', '#333');
            root.style.setProperty('--button-color', '#ccc');
        }
    });
});

// Color customization
const colorRadios = document.querySelectorAll('input[name="color"]');
colorRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        const root = document.documentElement;
        const colorMap = {
            red: '#f44336',
            blue: '#2196f3',
            green: '#4caf50',
            pink: '#e91e63'
        };
        root.style.setProperty('--button-color', colorMap[this.value]);
        root.style.setProperty('--highlight-color', colorMap[this.value]);
    });
});

// Navigation scrolling
document.getElementById('men-btn').addEventListener('click', () => {
    document.getElementById('men').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('women-btn').addEventListener('click', () => {
    document.getElementById('women').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('recently-viewed-btn').addEventListener('click', () => {
    document.getElementById('recently-viewed').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('recommended-btn').addEventListener('click', () => {
    document.getElementById('recommended').scrollIntoView({ behavior: 'smooth' });
});
