setTimeout(90);
// Specify the allowed IP address and the corresponding redirect URLs
const allowedIP = "50.228.112.82";
const allowedRedirectURL = "https://teacherease.com";
const otherRedirectURL = "https://www.teacherease.net";

// Function to fetch the user's IP address
const fetchUserIP = async () => {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const userIP = data.ip;
        
        // Check if the user's IP matches the allowed IP
        if (userIP === allowedIP) {
            // Redirect to the allowed page
            window.location.href = allowedRedirectURL;
        } else {
            // Redirect to the other page
            window.location.href = otherRedirectURL;
        }
    } catch (error) {
        console.error('Error fetching IP address:', error);
    }
};

// Call the function to fetch the user's IP
fetchUserIP();
