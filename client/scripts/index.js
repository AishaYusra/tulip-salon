const uri = 'https://tulipbeautysalon-api.onrender.com'     // the server url

if (token) {    // ensures only authenticated users can add a new blog
    const bookapt = document.createElement('a')
    addBlog.className = 'bookapt'
    addBlog.href = 'book.html'
    addBlog.innerText = 'Book Now'
    main.appendChild(bookapt)
}
