// Function to handle theme selection and set cookie
function handleThemeSelection() {
    // Get the selected theme value
    var selectedTheme = document.querySelector('input[name="theme"]:checked').value;

    // Set cookie based on the selected theme
    switch(selectedTheme) {
        case 'teacherease':
            document.cookie = "server=teacherease; path=/";
            break;
        case 'schoolfacts':
            document.cookie = "server=schoolfacts; path=/";
            break;
        case 'light':
            document.cookie = "theme=light; path=/";
            break;
            break;
        case 'dark':
            document.cookie = "theme=dark; path=/";
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
