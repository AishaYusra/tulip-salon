const uri = 'https://tulipbeautysalon-api.onrender.com'     // the server url

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const message = document.querySelector('.message');
    const dateSelect = document.getElementById('dateSelect'); // Select the date dropdown
    const timeSelect = document.getElementById('timeSelect'); // Select the time dropdown


    // Function to populate the date dropdown with options
    function populateDateOptions() {
        const startDate = new Date(); // You can set the starting date as needed
        const endDate = new Date();   // You can set the ending date as needed
        endDate.setDate(endDate.getDate() + 30); // Example: Allow booking for the next 7 days

        // Clear existing options
        dateSelect.innerHTML = '<option value="" disabled selected>Choose your date</option>';

        // Generate date options and add them to the dropdown
        while (startDate <= endDate) {
            const option = document.createElement('option');
            option.value = formatDate(startDate); // Format the date as needed
            option.text = formatDate(startDate);  // Format the date as needed
            dateSelect.appendChild(option);

            // Increment the date for the next option
            startDate.setDate(startDate.getDate() + 1);
        }
    }

    // Function to format a date as "YYYY-MM-DD" (you can customize this)
    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

    // Populate the date dropdown initially
    populateDateOptions();

    // Event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

    });

    // Function to populate the time options dynamically
    function populateTimeOptions() {
        // Define an array of time slots
        const timeSlots = [
            '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm'
        ];

        // Clear existing options
        timeSelect.innerHTML = '<option value="" disabled selected>Choose your time</option>';

        // Add time slots to the dropdown
        timeSlots.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.text = time;
            timeSelect.appendChild(option);
        });
    }

    // Populate the time dropdown initially
    populateTimeOptions();

    // Event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

    });

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Retrieve form inputs
        const nameInput = form.querySelector('input[type="text"]');
        const emailInput = form.querySelector('input[type="email"]');
        const phoneInput = form.querySelector('input[type="tel"]');
        const dateSelect = form.querySelector('select[name="date"]');
        const timeSelect = form.querySelector('select[name="time"]');
        const stylistSelect = form.querySelector('select[name="stylist"]');
        const serviceSelect = form.querySelector('select[name="service"]');
        const message = form.querySelector('.message')
        // Validate form inputs
        if (
            !nameInput.value ||
            !emailInput.value ||
            !phoneInput.value ||
            dateSelect.value === '' ||
            timeSelect.value === '' ||
            stylistSelect.value === '' ||
            serviceSelect.value === ''
        ) {
            message.textContent = 'All fields must be filled!';
        } else {
            message.textContent = 'Appointment booked successfully!';
            form.reset(); // Reset the form
        }

    });



});

