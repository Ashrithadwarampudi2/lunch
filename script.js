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

                alert("Please select a preference.");

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
    // SURVEY FORM
    // ==========================================

    const surveyForm =
        document.getElementById("lunchOrderForm");

    const successModal =
        document.getElementById("successModal");

    if (surveyForm && successModal) {

        surveyForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const modal =
                new bootstrap.Modal(successModal);

            modal.show();

            surveyForm.reset();

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

    alert(
        "Food preference has been cleared."
    );
}