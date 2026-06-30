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
    // SURVEY PAGE
    // ==========================================

    const surveyForm =
        document.getElementById("lunchOrderForm");

    const surveySuccessModal =
        document.getElementById("successModal");

    if (surveyForm && surveySuccessModal) {

        surveyForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const modal =
                new bootstrap.Modal(
                    surveySuccessModal
                );

            modal.show();

            surveyForm.reset();

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
