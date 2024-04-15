// Function to parse the URL parameters and extract the game URL
function extractGameURL() {
    // Get the full URL of the page
    var url = window.location.href;
    
    // Check if the URL contains 'game.html?url='
    if (url.includes('game.html?url=')) {
        // Extract the game URL after 'game.html?url='
        var gameURL = url.split('game.html?url=')[1];
        
        // Decode URI component to handle special characters
        gameURL = decodeURIComponent(gameURL);
        
        return gameURL;
    }
    
    // If the URL format is incorrect, return null
    return null;
}

// iframe function
function createIframe(gameURL) {
    // Create iframe element
    var iframe = document.createElement('iframe');
    
    // Set iframe attributes
    iframe.src = gameURL;
    iframe.style.width = "100%"; // Set width to 100%
    iframe.style.height = "100%"; // Set height to 100%
    iframe.style.border = "none"; // Remove border
    
    // Append iframe to container
    document.getElementById('game-container').appendChild(iframe);
}

// Get game URL from URL parameters
var gameURL = extractGameURL();

// Check if game URL exists
if (gameURL) {
    createIframe(gameURL);
} else {
    // Redirect to 404 page if no game URL is found
    window.location.href = "404.html";
}
