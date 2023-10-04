// const uri = 'https://hiit-blog-api.onrender.com'     // the server url

const details = document.querySelectorAll('input')

const btn = document.querySelector('.submit')
const msg = document.querySelector('.message')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    msg.innerText = ''

    if (!details[0].value || !details[1].value || !details[2].value || !details[3].value || !details[4].value) {
        msg.innerText = 'All fields must be filled'
    }
    else if (details[3].value !== details[4].value) {
        msg.innerText = "Passwords do not match"
    }
    else {
        let user = {
            firstname: details[0].value,
            lastname: details[1].value,
            email: details[2].value,
            password: details[3].value
        }

        createAccount(user)
    }

})