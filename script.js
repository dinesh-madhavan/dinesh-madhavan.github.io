function toggleDarkMode() {
    const body = document.body;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    let themeImage; // Declare variable for theme image

    // Check if on iBike page
    if (document.getElementById('ibike-project-image')) {
        themeImage = document.getElementById('ibike-project-image');
    } 
    // Check if on EcoTrack page
    else if (document.getElementById('ecotrack-project-image')) {
        themeImage = document.getElementById('ecotrack-project-image');
    }
 // Check if on Recipe page
 else if (document.getElementById('recipe-project-image')) {
    themeImage = document.getElementById('recipe-project-image');
}




body.classList.toggle('dark-mode');

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

document.addEventListener('DOMContentLoaded', (event) => {
    if (!document.body.classList.contains('dark-mode')) {
        toggleDarkMode();
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    // Function to toggle dark mode and save preference
    window.toggleDarkMode = function() {
        body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
        
        if (body.classList.contains('dark-mode')) {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    }

    // Apply the saved preference
    const darkModePreference = localStorage.getItem('darkMode') === 'true';
    if (darkModePreference) {
        body.classList.add('dark-mode');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        body.classList.remove('dark-mode');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
});
