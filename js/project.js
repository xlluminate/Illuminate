// Function to parse the URL parameters and extract the game URL
function extractGameURL() {
    // Get the full URL of the page
    var url = window.location.href;

    // Check if the URL contains a query string
    if (url.indexOf('?') !== -1) {
        // Split the URL at the '?' character to get the query string
        var queryString = url.split('?')[1];

        // Split the query string at the '&' character to get individual parameters
        var parameters = queryString.split('&');

        // Loop through each parameter to find the one with the game URL
        for (var i = 0; i < parameters.length; i++) {
            var parameter = parameters[i];

            // Check if the parameter starts with 'url='
            if (parameter.startsWith('url=')) {
                // Return the game URL
                return parameter.substring(4); // Remove 'url=' prefix
            }
        }
    }

    // If no game URL is found, return null
    return null;
}

// Function to create and append the iframe
function createIframe(gameURL) {
    // create iframe
    var iframe = document.createElement('iframe');

    // set iframe attributes
    iframe.id = "game-iframe"; // Set iframe ID
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.referrerpolicy = "no-referrer";
    iframe.allow = "fullscreen";
    iframe.src = gameURL;

    // append iframe to game-container
    document.getElementById('game-container').appendChild(iframe);
}

// Function to toggle fullscreen mode and adjust iframe size
function toggleFullscreen() {
    var iframe = document.getElementById('game-iframe');
    var fullscreenBtn = document.getElementById('fullscreen-btn');

    if (!document.fullscreenElement) {
        // Enter fullscreen mode
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) { /* Firefox */
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) { /* IE/Edge */
            iframe.msRequestFullscreen();
        }

        // Change button text
        fullscreenBtn.textContent = 'Exit Fullscreen';
    } else {
        // Exit fullscreen mode
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }

        // Change button text
        fullscreenBtn.textContent = 'Fullscreen';
    }
}

// extract game URL from URL parameters
var gameURL = extractGameURL();

// check if game URL is found
if (gameURL) {
    createIframe(gameURL);
} else {
    // Redirect to 404 page if no game URL is found
    window.location.href = "404.html";
}
