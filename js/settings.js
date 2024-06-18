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

function setTheme() {
    var theme = document.getElementById('theme').value;
    setCookie('theme', theme, 30);
    applyTheme(theme);
}

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

var theme = getCookie('theme');
if (theme == 'light') {
    document.getElementById('theme').value = 'light';
} else if (theme == 'dark') {
    document.getElementById('theme').value = 'dark';
}

function saveData() {
    var gameServer = getCookie('gamedomain');
    var url = 'https://' + gameServer + '/minecraftgoldfish3/more/data/save.html';
    window.open(url);
}
function loadData() {
    var gameServer = getCookie('gamedomain');
    var url = 'https://' + gameServer + '/minecraftgoldfish3/more/data/load.html';
    window.open(url);
}

function setFullscreenCookie() {
    var autoFullscreen = getCookie('autoFullscreen');
    if (autoFullscreen == null) {
        setCookie('autoFullscreen', 'true', 30);
    } else if (autoFullscreen == 'false') {
        setCookie('autoFullscreen', 'true', 30);
    } else if (autoFullscreen == 'true') {
        setCookie('autoFullscreen', 'false', 30);
    }
}
if ((document.getElementById('fullscreen').checked == false) && (getCookie('autoFullscreen') == 'true')) {
    document.getElementById('fullscreen').checked == true;
}
