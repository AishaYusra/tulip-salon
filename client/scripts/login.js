const uri = 'https://tulipbeautysalon-api.onrender.com'     // the server url

const details = document.querySelectorAll('input')

const btn = document.querySelector('.submit')
const msg = document.querySelector('.message')
const password = document.querySelector('.pass');
const email = document.querySelector('.email');
// const form = document.querySelector(form);

btn.addEventListener('click', (e) => {
    e.preventDefault()
    msg.innerText = ''

    if (!details[0].value || !details[1].value) {
        msg.innerText = 'All fields must be filled!'
    }

    else {
        let user = {
            email: details[0].value,
            password: details[1].value
        }
        loginUser(user)
        console.log('Attempting login with user: ', user)
    }

})



// try {
// const response = await fetch('http://localhost:4000/login', {
//         mode: 'no-cors',
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(user),
//     });

//     if (!response.ok) {
//         const jsonData = await response.json();
//         throw new Error(jsonData.error);
//     }

//     const { user_id, token, message } = await response.json();

//     // Store the token and user ID in localStorage for subsequent requests
//     localStorage.setItem('token', token);
//     localStorage.setItem('userId', user_id);

//     form.reset();

//     // // Redirect to the home page
//     window.location.href = 'index.html';
// } catch (error) {
//     message.textContent = error.message;
// }



async function loginUser(data) {
    try {
        const response = await fetch('${uri}/accounts/auth//login', {
            mode: "no-cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            // const jsonData = await response.json();
            throw new Error('Network response was not ok');
        }

        const result = await response.json();

        console.log('Result:', result);


        console.log(result);

        if (response.status === 200) {
            window.localStorage.setItem('token', result.token)  // the authorixation token is saved to the local storage so that it can be sent to the server for authentication. See header.js line 8
            window.localStorage.setItem('name', result.user.name)  // the authorixation token is saved to the local storage so that it can be sent to the server for authentication. See header.js line 8
            window.location.href = 'index.html'
        }

        if (result.error) {
            msg.innerText = result.error
        }

    } catch (error) {
        msg.innerText = error.message
        console.error(error);
    }
}