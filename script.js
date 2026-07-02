// =======================================================
// COMMVAULT LUNCH PORTAL
// =======================================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // PREFERENCE MODAL
    // ==========================================

    const preferenceModal =
        document.getElementById("preferenceModal");

    const submitPreferenceBtn =
        document.getElementById("submitPreferenceBtn");

    if (preferenceModal && submitPreferenceBtn) {

        const savedPreference =
            localStorage.getItem("dietPreference");

        if (!savedPreference) {

            const modal =
                new bootstrap.Modal(preferenceModal);

            modal.show();
        }

        submitPreferenceBtn.addEventListener("click", () => {

            const selectedOption =
                document.querySelector(
                    'input[name="dietPreference"]:checked'
                );

            if (!selectedOption) {
                return;
            }

            localStorage.setItem(
                "dietPreference",
                selectedOption.value
            );

            const modal =
                bootstrap.Modal.getInstance(
                    preferenceModal
                );

            if (modal) {
                modal.hide();
            }

        });

    }

   
    // ==========================================
    // CONTACT PAGE
    // ==========================================

    const contactForm =
        document.getElementById("contactForm");

    const contactSuccessModal =
        document.getElementById("contactSuccessModal");

    if (contactForm && contactSuccessModal) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const modal =
                new bootstrap.Modal(
                    contactSuccessModal
                );

            modal.show();

            contactForm.reset();

        });

    }

    // ==========================================
    // LUNCH NOTIFICATION SIGNUP
    // ==========================================

    const updatesForm =
        document.getElementById("updatesForm");

    const subscribeSuccessModal =
        document.getElementById(
            "subscribeSuccessModal"
        );

    if (updatesForm && subscribeSuccessModal) {

        updatesForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const updatesModal =
                bootstrap.Modal.getInstance(
                    document.getElementById("updatesModal")
                );

            if (updatesModal) {
                updatesModal.hide();
            }

            const successModal =
                new bootstrap.Modal(
                    subscribeSuccessModal
                );

            successModal.show();

            updatesForm.reset();

        });

    }

    // ==========================================
    // STAY UPDATED OFFCANVAS
    // ==========================================

    const stayUpdatedCanvas =
        document.getElementById("stayUpdatedCanvas");

    if (
        stayUpdatedCanvas &&
        localStorage.getItem("dietPreference") &&
        !localStorage.getItem("stayUpdatedPrompt")
    ) {

        setTimeout(() => {

            const offcanvas =
                new bootstrap.Offcanvas(
                    stayUpdatedCanvas
                );

            offcanvas.show();

            localStorage.setItem(
                "stayUpdatedPrompt",
                "shown"
            );

        }, 5000);

    }

});

// =======================================================
// HELPER FUNCTIONS
// =======================================================

function getUserPreference() {

    return localStorage.getItem(
        "dietPreference"
    );

}

function resetPreference() {

    localStorage.removeItem(
        "dietPreference"
    );

}

function resetStayUpdatedPrompt() {

    localStorage.removeItem(
        "stayUpdatedPrompt"
    );

}

const preference =
    localStorage.getItem("dietPreference");

if (preference === "Vegetarian") {

    const mondayVeg =
        document.querySelector(
            'input[name="monday"][value="Veg"]'
        );

    if(mondayVeg){
        mondayVeg.checked = true;
    }

}

if (preference === "Non-Vegetarian") {

    const mondayChicken =
        document.querySelector(
            'input[name="monday"][value="Chicken"]'
        );

    if(mondayChicken){
        mondayChicken.checked = true;
    }

}

const lunchSurveyForm =
    document.getElementById(
        "lunchSurveyForm"
    );

if(lunchSurveyForm){

    lunchSurveyForm.addEventListener(
        "submit",
        (event)=>{

            event.preventDefault();

            new bootstrap.Modal(
                document.getElementById(
                    "surveySuccessModal"
                )
            ).show();

        }
    );

}