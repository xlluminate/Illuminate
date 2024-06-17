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

function handleDomainSelectChange() {
    var domainSelect = document.getElementById('domain-select');
    var customDomainInput = document.getElementById('custom-domain-input');

    if (domainSelect.value === 'custom') {
        customDomainInput.style.display = 'block';
    } else {
        customDomainInput.style.display = 'none';
    }
}

function setGameDomain() {
    var domainSelect = document.getElementById('domain-select');
    var customDomainInput = document.getElementById('custom-domain');

    var selectedDomain = domainSelect.value;
    if (selectedDomain === 'custom') {
        selectedDomain = customDomainInput.value.trim();
    }

    if (selectedDomain) {
        setCookie('gamedomain', selectedDomain, 365);
        alert('Game domain set to: ' + selectedDomain);
        location.reload(); // reload
    } else {
        alert('Please enter a valid domain.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var savedDomain = getCookie('gamedomain');
    if (!savedDomain) {
        setCookie('gamedomain', 'projectassets.teacherease.net', 365);
    }

    var domainSelect = document.getElementById('domain-select');
    if (domainSelect) {
        domainSelect.value = savedDomain || 'default';
        handleDomainSelectChange();
    }
});
