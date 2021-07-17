const style = document.getElementById('style');
const icon = document.getElementById('theme-icon');

// i know there is a better way to do this, i just dont know how

function storeTheme(icon, theme) {
    localStorage.setItem("icon", icon);
    localStorage.setItem("theme", "css/" + theme);
} 

document.getElementById('themer').addEventListener('click', function() {
    storeTheme('fas fa-moon', 'light.css');
    if(style.getAttribute('href') === 'css/light.css') {
        style.setAttribute('href', 'css/dark.css');
        icon.setAttribute('class', 'far fa-sun');
        storeTheme('far fa-sun', 'dark.css');
    } else {
        style.setAttribute('href', 'css/light.css');
        icon.setAttribute('class', 'fas fa-moon');
    }
});

document.onload = function() {
    style.setAttribute('href', localStorage.getItem("theme") || 'css/light.css');
    icon.setAttribute('class', localStorage.getItem("icon") || 'fas fa-moon')
}();