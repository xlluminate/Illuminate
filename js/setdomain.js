document.addEventListener('DOMContentLoaded', () => {
    const domainSelect = document.getElementById('domain-select');
    const customDomainInput = document.getElementById('custom-domain-input');
    const customDomainField = document.getElementById('custom-domain');

    domainSelect.addEventListener('change', () => {
        if (domainSelect.value === 'custom') {
            customDomainInput.style.display = 'block';
        } else {
            customDomainInput.style.display = 'none';
        }
    });
});

function setGameDomain() {
    const domainSelect = document.getElementById('domain-select');
    const customDomainField = document.getElementById('custom-domain');
    let domain = domainSelect.value;

    if (domain === 'custom') {
        domain = customDomainField.value.trim();
        if (domain === '') {
            alert('Please enter a custom domain.');
            return;
        }
    }

    setCookie('gamedomain', domain, 365);
    alert(`Game domain set to: ${domain}`);
    window.location.reload(); // reload
}
