document.addEventListener('DOMContentLoaded', function () {


    const token = window.localStorage.getItem('token')
    const userName = window.localStorage.getItem('name')

    console.log(window.localStorage.getItem('token'));
    console.log(window.localStorage.getItem('name'));

    const user = userName ? userName : 'User'
    let dropdownState = false

    const header = document.querySelector('header')
    const header_btn = document.querySelector('header button')
    header_btn.innerHTML = `<p>${user}</p>`

    // JavaScript function to generate the navigation menu dynamically
    function createNavigationMenu() {
        // Get the container element for the navigation menu
        const navContainer = document.getElementById("myNav");

        // Create an unordered list element
        const ul = document.createElement("ul");

        // Array of menu items with their text and href attributes
        const menuItems = [
            { text: "Home", href: "index.html" },
            { text: "Our Services", href: "services.html" },
            { text: "Contact Us", href: "contact.html" }
        ];

        // Loop through the menuItems array and create list items with anchor tags
        menuItems.forEach(item => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = item.href;
            a.textContent = item.text;
            li.appendChild(a);
            ul.appendChild(li);
        });
        // return ul;
        // Add the unordered list to the navigation container
        navContainer.appendChild(ul);
    }

    // Call the function to generate the navigation menu
    createNavigationMenu();


    const icon = document.createElement('div')
    icon.setAttribute('class', `icon icon-${dropdownState}`)
    icon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>
            </svg>
`
    header_btn.appendChild(icon)

    const dropdown = document.createElement('div')
    dropdown.setAttribute('class', `dropdown dropdown-${dropdownState}`)

    // const navContainer = document.getElementById('myNav')

    const profile = document.createElement('a')
    profile.setAttribute('href', 'profile.html')
    profile.innerText = 'Profile'

    const logout = document.createElement('a')
    logout.setAttribute('href', 'login.html')
    logout.addEventListener('click', () => {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('name')
    })
    logout.innerText = 'Logout'

    const login = document.createElement('a')
    login.setAttribute('href', 'login.html')
    login.innerText = 'Log In'

    const signup = document.createElement('a')
    signup.setAttribute('href', 'signup.html')
    signup.innerText = 'Sign Up'

    if (token) {
        // dropdown.appendChild(createNavigationMenu())
        dropdown.appendChild(profile)
        dropdown.appendChild(logout)
    }

    else {
        // dropdown.appendChild(createNavigationMenu())
        dropdown.appendChild(login)
        dropdown.appendChild(signup)
    }

    header.appendChild(dropdown)
    // navContainer.appendChild(dropdown)
    header_btn.addEventListener('click', () => {
        icon.classList.remove(`icon-${dropdownState}`)
        dropdown.classList.remove(`dropdown-${dropdownState}`)
        dropdownState = !dropdownState
        icon.classList.add(`icon-${dropdownState}`)
        dropdown.classList.add(`dropdown-${dropdownState}`)
    })

});
