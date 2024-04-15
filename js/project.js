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
            
            // Check if the parameter starts with 'https://'
            if (parameter.startsWith('https://')) {
                // Return the game URL
                return parameter;
            }
        }
    }
    
    // If no game URL is found, return null
    return null;
}

// iframe function
function createIframe(gameURL) {
    // create iframe
    var iframe = document.createElement('iframe');
    
    // set iframe
    iframe.src = gameURL;
    
    // put the iframe
    document.getElementById('game-container').appendChild(iframe);
}

// get url
var gameURL = extractGameURL();

// checks url
if (gameURL) {
    createIframe(gameURL);
} else {
    window.location.href = "404.html";
}
// thank you chatgpt for half of this
