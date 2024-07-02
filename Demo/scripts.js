// scripts.js

// Example function to update progress tracker
function updateProgressTracker() {
    const progress = document.getElementById('progress');
    const totalModules = 5;
    const completedModules = 3; // This would be dynamic in a real application

    const progressPercentage = (completedModules / totalModules) * 100;
    progress.style.width = `${progressPercentage}%`;
    progress.textContent = `${progressPercentage}% Complete`;
}

// Call the function to update the progress tracker
document.addEventListener('DOMContentLoaded', updateProgressTracker);
