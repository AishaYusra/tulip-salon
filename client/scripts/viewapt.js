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
            const li = document.createElement('li');
            li.textContent = `Name: ${appointment.name}, Date: ${appointment.date}, Time: ${appointment.time}`;
            ul.appendChild(li);
        });

        // Append the unordered list to the main element
        appointmentList.appendChild(ul);
    }
});
