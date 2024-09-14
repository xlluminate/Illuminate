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

var pageTitle = getCookie('title');
if (pageTitle !== null) {
    document.title = pageTitle;
}

var faviconLink = getCookie('favicon');
if (faviconLink !== null) {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = faviconLink;
} else {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = '/favicon.ico';
}

document.addEventListener('DOMContentLoaded', function() {
    var savedTheme = getCookie('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme('light');
    }
});

function applyTheme(theme) {
    var themeLink = document.getElementById('theme-link');
    if (themeLink) {
        if (theme === 'dark') {
            themeLink.href = '/css/dark.css';
        } else {
            themeLink.href = '/css/index.css';
        }
    } else {
        console.error('Theme link element not found');
    }
}

var gameServer = getCookie('gamedomain');
if (gameServer == null) {
    setCookie('gamedomain', 'projectassets.teacherease.net', 365);
}

function newad() {
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-331773503037412";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
    document.body.innerHTML += '<ins class="adsbygoogle" style="display:block; text-align: center;" data-ad-client="ca-pub-3317735030374126" data-ad-slot="4276812776" data-ad-format="auto" data-full-width-responsive="true"></ins>';
    var script = document.createElement("script");
    script.innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});';
    document.body.appendChild(script);
}

function insertads() {
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-331773503037412";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
}
