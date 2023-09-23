sdocument.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.needs-validation');
    const birthDateInput = document.getElementById('birthDate');
    const guardianDetailsSection = document.querySelector('.guardianDetails');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function (event) {
        const age = calculateAge(birthDateInput.value);
        if (age < 18) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                errorMessage.innerText = 'Please fill out all fields.';
            }
        } else {
            guardianDetailsSection.classList.remove('was-validated');
        }

        form.classList.add('was-validated');
    });

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

// for submit valid or not valid to proceed
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.needs-validation');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function (event) {
        // Your client-side validation logic goes here
        if (!isFormValid()) {
            event.preventDefault(); // Prevent form submission
            errorMessage.innerText = 'Please fill out all fields.';
        }
    });

    function isFormValid() {
        // Implement your validation logic here
        const firstNameInput = document.getElementById('firstName');
        // Add more validation checks for other form fields as needed

        if (!firstNameInput.value) {
            return false;
        }

        // Add more validation checks for other fields

        return true;
    }
});
