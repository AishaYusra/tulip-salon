const uri = 'https://tulipbeautysalon-api.onrender.com'     // the server url


const token = window.localStorage.getItem('token')
const main = document.querySelector('main')

if (token) {    // ensures only authenticated users can add a new blog
    const bookapt = document.createElement('a')
    bookapt.className = 'bookapt'
    bookapt.href = 'book.html'
    bookapt.innerText = 'Book Now'
    main.appendChild(bookapt)
}

if (token) {
    const viewapt = document.createElement('a')
    viewapt.className = 'viewapt'
    viewapt.href = 'viewapt.html'
    viewapt.innerText = 'View Appointments'
    main.appendChild(viewapt)
} 
