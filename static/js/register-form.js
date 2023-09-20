// register-form.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.needs-validation');
    const invalidCheck = document.getElementById('invalidCheck');

    // Hide invalid feedback initially
    const invalidFeedbacks = form.querySelectorAll('.invalid-feedback');
    invalidFeedbacks.forEach(function (feedback) {
        feedback.style.display = 'none';
    });

    // Listen for form submission
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            // Prevent form submission if validation fails
            event.preventDefault();
            event.stopPropagation();

            // Show invalid feedback
            invalidFeedbacks.forEach(function (feedback) {
                feedback.style.display = 'block';
            });
        }
    });

    // Listen for changes in input fields and hide associated invalid feedback when valid
    const inputFields = form.querySelectorAll('input, select');
    inputFields.forEach(function (input) {
        input.addEventListener('input', function () {
            const associatedFeedback = form.querySelector(`.invalid-feedback[data-for="${input.id}"]`);
            if (input.checkValidity()) {
                // Input is valid, hide associated feedback
                if (associatedFeedback) {
                    associatedFeedback.style.display = 'none';
                }
            } else {
                // Input is invalid, show associated feedback
                if (associatedFeedback) {
                    associatedFeedback.style.display = 'block';
                }
            }
        });
    });
});
