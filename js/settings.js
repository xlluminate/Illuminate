// Function to handle theme selection and set cookie
function handleThemeSelection() {
    // Get the selected theme value
    var selectedTheme = document.querySelector('input[name="theme"]:checked').value;

    // Set cookie based on the selected theme
    switch(selectedTheme) {
        case 'teacherease':
            // Set cookie value for teacherease.net
            document.cookie = "theme=teacherease; path=/";
            break;
        case 'schoolfacts':
            // Set cookie value for schoolfacts.xyz
            document.cookie = "theme=schoolfacts; path=/";
            break;
        case 'light':
 
            break;
        case 'dark':

            break;
        default:

            break;
    }
}

// Add event listener to handle theme selection
document.addEventListener('DOMContentLoaded', function() {
    var themeOptions = document.querySelectorAll('input[name="theme"]');
    themeOptions.forEach(function(option) {
        option.addEventListener('change', handleThemeSelection);
    });
});
