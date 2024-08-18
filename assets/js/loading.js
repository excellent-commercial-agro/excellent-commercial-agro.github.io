document.addEventListener('DOMContentLoaded', () => {
    // Simulate loading
    setTimeout(() => {
        document.getElementById('loading-overlay').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading-overlay').style.display = 'none';
        }, 500); // Match this time with the CSS transition duration
    }, 3000); // Adjust this time to control how long the loading screen is shown
});
