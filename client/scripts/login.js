// const uri = 'https://tulipbeautysalon-api.onrender.com'     // the server url

const details = document.querySelectorAll('input')
const btn = document.querySelector('.submit')
const msg = document.querySelector('.message')
// const password = document.querySelector('.pass');
// const email = document.querySelector('.email');
const form = document.querySelector('form');


btn.addEventListener('click', async (e) => {
    e.preventDefault();
    msg.innerText = ''

    let user;

    if (!details[0].value || !details[1].value) {
        msg.innerText = 'All fields must be filled!'
    }

    else {
        const user = {
            email: details[0].value,
            password: details[1].value
        };
    }


    try {
        const response = await fetch("http://localhost:4000/login", {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            const jsonData = await response.json();
            throw new Error(jsonData.error);
        }




        const { user_id, token, message } = await response.json();

        // Store the token and user ID in localStorage for subsequent requests
        localStorage.setItem('token', token);
        localStorage.setItem('userId', user_id);

        form.reset();

        // // Redirect to the home page
        window.location.href = 'index.html';
    } catch (error) {
        msg.textContent = error.message;
    }

})
