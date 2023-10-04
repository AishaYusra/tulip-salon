
const main = document.querySelector('main')

const profile = document.createElement('div')
profile.className = 'profile'
main.appendChild(profile)

const welcomeMsg = document.createElement('h2')
welcomeMsg.className = 'welcome'
welcomeMsg.innerText = `Hi, ${user.first_name}`
profile.appendChild(welcomeMsg)

const userEmail = document.createElement('p')
userEmail.className = 'userEmail'
userEmail.innerText = user.email
profile.appendChild(userEmail)

const editProfileBtn = document.createElement('button')
editProfileBtn.className = 'edit-profile'
editProfileBtn.innerText = 'Edit Profile'
profile.appendChild(editProfileBtn)


editProfileBtn.addEventListener('click', () => {
    editProfilePopup()
})

const editProfilePopup = () => {
    // pop-up to edit profile
    const cover = document.createElement('div')
    cover.className = 'cover'
    main.appendChild(cover)

    const profileForm = document.createElement('form')
    profileForm.className = 'profileForm'
    cover.appendChild(profileForm)

    const NameLabel = document.createElement('label')
    NameLabel.className = 'NameLabel'
    NameLabel.innerText = 'Your Name'
    profileForm.appendChild(NameLabel)

    const firstNameInput = document.createElement('input')
    firstNameInput.type = 'text'
    firstNameInput.className = 'firstNameInput'
    firstNameInput.setAttribute('value', user.first_name)
    profileForm.appendChild(firstNameInput)

    const lastNameLabel = document.createElement('label')
    lastNameLabel.className = 'lastNameLabel'
    lastNameLabel.innerText = 'Last Name'
    profileForm.appendChild(lastNameLabel)

    const lastNameInput = document.createElement('input')
    lastNameInput.type = 'text'
    lastNameInput.className = 'lastNameInput'
    lastNameInput.setAttribute('value', user.last_name)
    profileForm.appendChild(lastNameInput)


    const emailLabel = document.createElement('label')
    emailLabel.className = 'emailLabel'
    emailLabel.innerText = 'Email'
    profileForm.appendChild(emailLabel)

    const emailInput = document.createElement('input')
    emailInput.type = 'email'
    emailInput.className = 'emailInput'
    emailInput.setAttribute('value', user.email)
    profileForm.appendChild(emailInput)

    const passwordLabel = document.createElement('label')
    passwordLabel.className = 'passwordLabel'
    passwordLabel.innerText = 'Password'
    profileForm.appendChild(passwordLabel)

    const passwordInput = document.createElement('input')
    passwordInput.type = 'password'
    passwordInput.className = 'passwordInput'
    profileForm.appendChild(passwordInput)

    const cpasswordLabel = document.createElement('label')
    cpasswordLabel.className = 'cpasswordLabel'
    cpasswordLabel.innerText = 'Confirm Password'
    profileForm.appendChild(cpasswordLabel)

    const cpasswordInput = document.createElement('input')
    cpasswordInput.type = 'password'
    cpasswordInput.className = 'cpasswordInput'
    profileForm.appendChild(cpasswordInput)

    const btnContainer = document.createElement('div')
    btnContainer.className = 'btnContainer'
    profileForm.appendChild(btnContainer)

    const discardBtn = document.createElement('button')
    discardBtn.className = 'discardBtn'
    discardBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            `
    discardBtn.addEventListener('click', (e) => {
        e.preventDefault()
        cover.classList.add('hide')
    })
    btnContainer.appendChild(discardBtn)

    const confirmBtn = document.createElement('button')
    confirmBtn.className = 'confirmBtn'
    confirmBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>`
    confirmBtn.addEventListener('click', (e) => {
        e.preventDefault()
        cover.classList.add('hide')
    })
    btnContainer.appendChild(confirmBtn)
}