// PAGE NAVIGATION
function switchPage(pageId) {
    document.querySelectorAll(".page-panel").forEach(panel => {
        panel.classList.remove("active");
    });

    const targetPage = document.getElementById("page-" + pageId);

    if (targetPage) {
        targetPage.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// CLOSE MODAL
function closeModal(modalId) {
    const modal = document.getElementById(modalId);

    if (modal) {
        modal.style.display = "none";
    }
}

// PREFERENCE SYSTEM
let selectedPreference = null;

// Show modal when page loads
window.onload = function () {

    const savedPreference =
        localStorage.getItem("foodPreference");

    if (savedPreference) {

        selectedPreference = savedPreference;

        document.getElementById("welcomeModal").style.display = "none";

    } else {

        document.getElementById("welcomeModal").style.display = "flex";
    }
};

// Select a card
function selectPreference(preference, element) {

    selectedPreference = preference;

    document.querySelectorAll(".pref-card")
        .forEach(card => {
            card.classList.remove("selected");
        });

    element.classList.add("selected");
}

// Continue button
function savePreference() {

    if (selectedPreference === null) {

        alert("Please select a preference.");

        return;
    }

    localStorage.setItem(
        "foodPreference",
        selectedPreference
    );

    document.getElementById("welcomeModal").style.display = "none";
}

// Page switching
function switchPage(pageId) {

    document.querySelectorAll(".page-panel")
        .forEach(panel => {
            panel.classList.remove("active");
        });

    const page =
        document.getElementById("page-" + pageId);

    if (page) {
        page.classList.add("active");
    }
}

// Close modal helper
function closeModal(modalId) {

    const modal =
        document.getElementById(modalId);

    if (modal) {
        modal.style.display = "none";
    }
}

// Survey submit
function handleSurveySubmit(event) {

    event.preventDefault();

    document.getElementById(
        "thankYouModal"
    ).style.display = "flex";
}

// Return Home
function goToHome() {

    document.getElementById(
        "thankYouModal"
    ).style.display = "none";

    switchPage("home");
}
// SURVEY SUBMIT
function handleSurveySubmit(event) {
    event.preventDefault();

    const thankYouModal =
        document.getElementById("thankYouModal");

    if (thankYouModal) {
        thankYouModal.style.display = "flex";
    }
}

// RETURN HOME
function goToHome() {
    closeModal("thankYouModal");

    switchPage("home");

    const form =
        document.getElementById("lunchSurveyForm");

    if (form) {
        form.reset();
    }
}

// RESET PREFERENCE (OPTIONAL)
function resetPreference() {
    localStorage.removeItem("foodPreference");

    selectedPreference = null;

    const modal = document.getElementById("welcomeModal");

    if (modal) {
        modal.style.display = "flex";
    }
}

// CONTACT BUTTON
document.addEventListener("DOMContentLoaded", () => {
    const contactButton =
        document.querySelector(".btn-contact");

    if (contactButton) {
        contactButton.addEventListener("click", () => {
            alert(
                "For lunch questions, please contact the lunch coordination team."
            );
        });
    }
});