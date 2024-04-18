// Function to set a cookie with a specified name and value
function setCookie(cookieName, cookieValue) {
    document.cookie = `${cookieName}=${cookieValue}`;
}

// Function to handle clicks on links
function handleLinkClick(event) {
    // Get the target URL from the clicked link
    const targetURL = event.target.href;

    if (targetURL.includes('teacherease.net')) {
        setCookie('gameserver', 'teacherease1');
    } else if (targetURL.includes('schoolfacts.xyz')) {
        // Set the cookie value to 'something else' for schoolfacts.xyz
        setCookie('gameserver', 'schoolfacts1');
    }
}

// Add event listeners to links
document.getElementById('teachereaseLink').addEventListener('click', handleLinkClick);
document.getElementById('schoolfactsLink').addEventListener('click', handleLinkClick);

// Function to toggle light/dark theme
function toggleTheme() {
    // Implement your theme toggling logic here
}

// Function to toggle game servers
function toggleGameServers() {
    // Implement your game servers toggling logic here
}
