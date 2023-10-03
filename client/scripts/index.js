// const uri = 'https://hiit-blog-api.onrender.com'     // the server url
// const uri = 'http://127.0.0.1:5000'     // the server url

const token = window.localStorage.getItem('token')

const main = document.querySelector('main')

// Check if the user is logged in (you should replace this with your actual authentication logic)
const userIsLoggedIn = checkUserAuthentication();

// Get a reference to the booking button element
const bookingButton = document.getElementById('bookbutton');

// Hide or show the button based on the user's authentication status
if (userIsLoggedIn) {
    bookingButton.style.display = 'block'; // Show the button
} else {
    bookingButton.style.display = 'none';  // Hide the button
}

