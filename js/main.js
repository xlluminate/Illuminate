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

function eraseCookie(name) {
    document.cookie = name + "=; Max-Age=-99999;";
}

function apply() {
    setCookie('title', document.getElementById('title').value, '30');
    setCookie('favicon', document.getElementById('favicon').value, '30');
}

function reset() {
    eraseCookie('title');
    eraseCookie('favicon');
}

function applyTheme(theme) {
    var themeLink = document.getElementById('theme-link');
    if (theme === 'dark') {
        console.log('Applying dark theme');
        themeLink.href = 'css/dark.css';
    } else {
        console.log('Applying light theme');
        themeLink.href = 'css/index.css';
    }
    console.log('Theme link href set to:', themeLink.href);
}

function setTheme() {
    var theme = document.getElementById('theme').value;
    console.log('Setting theme to:', theme);
    setCookie('theme', theme, 30);
    applyTheme(theme);
}

document.addEventListener('DOMContentLoaded', function() {
    var savedTheme = getCookie('theme');
    if (savedTheme) {
        console.log('Saved theme found:', savedTheme);
        document.getElementById('theme').value = savedTheme;
        applyTheme(savedTheme);
    } else {
        console.log('No saved theme found, applying default');
        applyTheme('light');
    }
});
