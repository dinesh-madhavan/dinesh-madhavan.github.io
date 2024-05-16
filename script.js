function toggleDarkMode() {
    const body = document.body;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    let themeImage;

    // Determine the current project's image
    if (document.getElementById('ibike-project-image')) {
        themeImage = document.getElementById('ibike-project-image');
    } else if (document.getElementById('ecotrack-project-image')) {
        themeImage = document.getElementById('ecotrack-project-image');
    } else if (document.getElementById('recipe-project-image')) {
        themeImage = document.getElementById('recipe-project-image');
    }

    // Toggle dark mode class
    body.classList.toggle('dark-mode');

    // Update icons and image sources
    if (body.classList.contains('dark-mode')) {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        if (themeImage) {
            switch (themeImage.id) {
                case 'ibike-project-image':
                    themeImage.src = "assets/ibikeinfo/dark.png";
                    break;
                case 'ecotrack-project-image':
                    themeImage.src = "assets/Ecotrackinfo/ecotrack-dark.png";
                    break;
                case 'recipe-project-image':
                    themeImage.src = "assets/Recipeinfo/recipe-dark.png";
                    break;
            }
        }
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
        if (themeImage) {
            switch (themeImage.id) {
                case 'ibike-project-image':
                    themeImage.src = "assets/ibikeinfo/light.png";
                    break;
                case 'ecotrack-project-image':
                    themeImage.src = "assets/Ecotrackinfo/ecotrack-light.png";
                    break;
                case 'recipe-project-image':
                    themeImage.src = "assets/Recipeinfo/recipe-light.png";
                    break;
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    // Set initial state based on current mode
    if (body.classList.contains('dark-mode')) {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
});
