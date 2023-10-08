document.addEventListener('DOMContentLoaded', function () {
    const appointmentList = document.querySelector('.appointment-list');

    // Retrieve the stored appointments from local storage
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];

    if (storedAppointments.length === 0) {
        appointmentList.textContent = 'No appointments found.';
    } else {
        // Create an unordered list to display the appointments
        const ul = document.createElement('ul');

        // Loop through the stored appointments and create list items for each appointment
        storedAppointments.forEach(appointment => {
            // const li = document.createElement('li');
            // li.textContent = `Name: ${appointment.name}, Date: ${appointment.date}, Time: ${appointment.time}, Stylist: ${appointment.stylist}, Service: ${appointment.service}`;
            // ul.appendChild(li);
            storedAppointments.forEach(appointment => {
                const li = document.createElement('li');

                // Create separate div elements for each piece of information
                const nameDiv = document.createElement('div');
                nameDiv.textContent = `Name:  ${appointment.name}`;

                const dateDiv = document.createElement('div');
                dateDiv.textContent = `Date: ${appointment.date}`;

                const timeDiv = document.createElement('div');
                timeDiv.textContent = `Time: ${appointment.time}`;

                const stylistDiv = document.createElement('div');
                stylistDiv.textContent = `Stylist: ${appointment.stylist}`;

                const serviceDiv = document.createElement('div');
                serviceDiv.textContent = `Service: ${appointment.service}`;

                // Append the div elements to the list item
                li.appendChild(nameDiv);
                li.appendChild(dateDiv);
                li.appendChild(timeDiv);
                li.appendChild(stylistDiv);
                li.appendChild(serviceDiv);

                ul.appendChild(li);
            });

        });

        // Append the unordered list to the main element
        appointmentList.appendChild(ul);
    }
});
