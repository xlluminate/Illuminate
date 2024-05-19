// Settings JavaScript

// Function to set the theme
function setTheme(theme) {
    document.body.className = theme; // Set the body class to the selected theme
}

// Function to set the game server
function setGameServer(server) {
    // Get all game links
    var gameLinks = document.querySelectorAll('.game-link');

    // Iterate over each game link and update the href attribute
    gameLinks.forEach(function(link) {
        var href = link.getAttribute('data-original-href');
        link.href = href.replace('projectassets.teacherease.net', server);
    });
}

// Function to handle theme selection
function handleThemeSelection(theme) {
    switch (theme) {
        case 'light':
            setTheme('light');
            break;
        case 'dark':
            setTheme('dark');
            break;
    }
}

// Function to handle game server selection
function handleServerSelection(server) {
    switch (server) {
        case 'teacherease':
            setGameServer('projectassets.teacherease.net');
            break;
        case 'schoolfacts':
            setGameServer('projectassets.schoolfacts.xyz');
            break;
    }
}

// Event listener for theme selection
document.querySelectorAll('input[name="theme"]').forEach(function(input) {
    input.addEventListener('change', function() {
        var theme = this.value; // Get the selected theme
        handleThemeSelection(theme); // Handle theme selection
    });
});

// Event listener for game server selection
document.querySelectorAll('input[name="server"]').forEach(function(input) {
    input.addEventListener('change', function() {
        var server = this.value; // Get the selected game server
        handleServerSelection(server); // Handle game server selection
    });
});
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
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
