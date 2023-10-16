// This function adds a light mode to the web page when the sun icon button is clicked.
const darkMode = () => {
    const themeToggleBtn = document.querySelectorAll('#theme-toggle');

    // this code retrieves the user's preferred theme from local storage, if it exists, and apply it to the page.
    // this also saves the theme to local storage so that the browser reopens in the same mode when it is refreshed
    const theme = localStorage.getItem('theme');
    // on mount
    theme && document.body.classList.add(theme);

    // The handler
    const handleThemeToggle = () => {
        // Toggle the 'light-mode' class on the page's body element.
        document.body.classList.toggle('light-mode');
        // here,  the chosen theme is stored in the local storage so the remembers it when the page is refreshed.
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
        } else {
            // Remove the theme from local storage if the dark mode is selected.
            localStorage.removeItem('theme');
        }
    };

    // The Event Listener
    themeToggleBtn.forEach((btns) => {
        btns.addEventListener('click', handleThemeToggle)
    });
}

// Export the function for use in other parts of the code.
export default darkMode;