const uri = 'https://tulipbeautysalon-api.onrender.com'     // the server url

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const message = document.querySelector('.message');
    const dateSelect = document.getElementById('dateSelect'); // Select the date dropdown
    const timeSelect = document.getElementById('timeSelect'); // Select the time dropdown
    const btn = document.querySelector('form button')
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
        return `${year}-${month}-${day}`;
    }

    // Populate the date dropdown initially
    populateDateOptions();

    // Function to populate the time options dynamically
    function populateTimeOptions() {
        // Define an array of time slots
        const timeSlots = [
            '9:00:00', '10:00:00', '11:00:00', '12:00:00', '13:00:00', '14:00:00', '15:00:00', '16:00:00'
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
    form.addEventListener('submit', async (event) => {
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

        console.log('nameInput:', nameInput);
        console.log('emailInput:', emailInput);
        console.log('phoneInput:', phoneInput);
        console.log('dateSelect:', dateSelect);
        console.log('timeSelect:', timeSelect);
        console.log('stylistSelect:', stylistSelect);
        console.log('serviceSelect:', serviceSelect);

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
            try {
                const formData = {
                    name: nameInput.value,
                    email: emailInput.value,
                    phone: phoneInput.value,
                    date: dateSelect.value,
                    time: timeSelect.value,
                    stylist: stylistSelect.value,
                    service: serviceSelect.value,
                };
                const response = await fetch("http://localhost:4000/book", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    const jsonData = await response.json();
                    throw new Error(jsonData.error);
                }

                const jsonData = await response.json();
                alert(jsonData.message);
                if (response.status === 200) {
                    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
                    appointments.push(formData);
                    localStorage.setItem('appointments', JSON.stringify(appointments));
                    message.textContent = 'Appointment booked successfully!';
                    form.reset(); // Reset the form
                    window.location.href = 'index.html'
                }
            }
            catch (error) {
                message.textContent = error.message
            }
        }
    });

});


