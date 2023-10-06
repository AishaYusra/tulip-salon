const details = document.querySelectorAll('input')
const form = document.querySelector("form");
const message = document.querySelector('.message');

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const details = document.querySelectorAll('input')


    if (!details[0].value || !details[1].value || !details[2].value || !details[3].value) {
        message.textContent = "Please fill the form correctly.";
        return;
    }

    if (details[2].value !== details[3].value) {
        message.textContent = "Your passwords don't match.";
        return;
    }

    const userLog = {
        name: details[0].value,
        email: details[1].value,
        password: details[2].value
    };

    try {
        const response = await fetch("http://localhost:4000/signup", {
            // mode: "no-cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userLog),
        });

        if (!response.ok) {
            const jsonData = await response.json();
            throw new Error(jsonData.error);
        }

        const jsonData = await response.json();
        alert(jsonData.message);
    } catch (error) {
        message.textContent = error.message
    }

    if (response.status === 200) window.location.href = 'login.html'


    form.reset()
});





// const uri = 'https://tulipbeautysalon-api.onrender.com'     // the server url

// const details = document.querySelectorAll('input')
// const form = document.querySelector('form');
// const btn = document.querySelector('.submit')
// const msg = document.querySelector('.message')

// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     msg.innerText = ''

//     if (!details[0].value || !details[1].value || !details[2].value || !details[3].value) {
//         msg.innerText = 'All fields must be filled'
//     }
//     else if (details[2].value !== details[3].value) {
//         msg.innerText = "Passwords do not match"
//     }
//     else {
//         let user = {
//             name: details[0].value,
//             email: details[1].value,
//             password: details[2].value
//         }

//         createAccount(user)
//     }

// })

// async function createAccount(data) {
//     try {
//         const response = await fetch(`${uri}/accounts/auth/signup`, {
//             mode: "no-cors",
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//         });

//         const result = await response.json();
//         if (result.error) msg.innerText = result.error

//         if (response.status === 200) window.location.href = 'login.html'

//         console.log(result)
//     } catch (error) {
//         msg.innerText = error.error
//         console.error(error);
//     }
// }