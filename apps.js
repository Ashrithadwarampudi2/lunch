// Tab Page Switching Engine (SPA Router Simulation)
function switchPage(pageId) {
    // Hide all views
    document.querySelectorAll('.page-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    // Show requested view
    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    // Scroll to top smoothly
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Close Popups Helper
function closeModal(modalId) {
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
        targetModal.style.display = 'none';
    }
}

// Form Submit Action Interceptor
function handleSurveySubmit(event) {
    event.preventDefault(); // Stop page reload
    const thankYouModal = document.getElementById('thankYouModal');
    if (thankYouModal) {
        thankYouModal.style.display = 'flex';
    }
}

// Return Home Action Button
function goToHome() {
    closeModal('thankYouModal');
    switchPage('home');
    const locationForm = document.getElementById("lunchSurveyForm");
    if (locationForm) {
        locationForm.reset();
    }
}