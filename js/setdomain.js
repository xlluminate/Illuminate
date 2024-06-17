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
        domainSelect.value = savedDomain || 'projectassets.teacherease.net';
    }
});
