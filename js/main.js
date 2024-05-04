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
if (!(pageTitle == null)) {
    document.title = pageTitle
}
var faviconLink = getCookie('favicon');
if (!(faviconLink == null)) {
    $('head').append('<link id="dynamic-favicon" rel="shortcut icon" href="' + faviconLink + '" />');
}