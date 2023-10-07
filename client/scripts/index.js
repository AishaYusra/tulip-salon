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
