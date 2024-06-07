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
    setTheme();
}

function reset() {
    eraseCookie('title');
    eraseCookie('favicon');
}

function setTheme() {
    var theme = document.getElementById('theme').value;
    setCookie('theme', theme, 30);
    applyTheme();
}

function applyTheme() {
    var theme = getCookie('theme') || 'light';
    var link = document.getElementById('theme-link');
    if (theme === 'dark') {
        link.href = 'css/dark.css';
    } else {
        link.href = 'css/index.css';
    }
}

window.onload = function() {
    applyTheme();
    // Set the selected value of the theme dropdown based on the current cookie value
    var theme = getCookie('theme') || 'light';
    document.getElementById('theme').value = theme;
}
