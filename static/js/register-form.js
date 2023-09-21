document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.needs-validation');
    const birthDateInput = document.getElementById('birth-date');
    const guardianDetailsSection = document.querySelector('.guardian-details');

    form.addEventListener('submit', function (event) {
        // Check if the student's age is less than 18
        const age = calculateAge(birthDateInput.value);
        if (age < 18) {
            // If the student is under 18, validate the guardian details
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
        } else {
            // If the student is 18 or older, do not validate guardian details
            guardianDetailsSection.classList.remove('was-validated');
        }

        // Always add 'was-validated' class to the form
        form.classList.add('was-validated');
    });

    // Function to calculate age based on birth date
    function calculateAge(birthDate) {
        const today = new Date();
        const birthDateObj = new Date(birthDate);
        let age = today.getFullYear() - birthDateObj.getFullYear();
        const monthDiff = today.getMonth() - birthDateObj.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
            age--;
        }

        return age;
    }
});
