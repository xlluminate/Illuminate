// Settings JavaScript
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function applyTheme(theme) {
    var themeLink = document.getElementById('theme-link');
    if (themeLink) {
        if (theme === 'dark') {
            themeLink.href = '/css/dark.css'; // 1 slash made a huge difference
        } else {
            themeLink.href = '/css/index.css'; // 1 slash made a huge difference
        }
    } else {
        console.error('Theme link element not found');
    }
}

function setTheme() {
    var theme = document.getElementById('theme').value;
    setCookie('theme', theme, 30);
    applyTheme(theme);
}

document.addEventListener('DOMContentLoaded', function() {
    var themeSelect = document.getElementById('theme');
    if (!themeSelect) {
        console.error('Theme select element not found');
        return;
    }

    var savedTheme = getCookie('theme');
    if (savedTheme) {
        themeSelect.value = savedTheme;
        applyTheme(savedTheme);
    } else {
        applyTheme('light');
    }
});

function apply() {
    setCookie('title', document.getElementById('title').value, '30');
    setCookie('favicon', document.getElementById('favicon').value, '30');
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function reset() {
    eraseCookie('title');
    eraseCookie('favicon');
}
function eraseCookie(name) {
    document.cookie = name + "=; Max-Age=-99999;";
}
