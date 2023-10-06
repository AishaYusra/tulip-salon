// const Accounts = require('../models/accountmodel')
// const jwt = require('jsonwebtoken')
// const JWT_SECRET = process.env.JWT_SECRET;


// const createToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "24h" })
// }


// exports.signup = async (req, res) => {
//     const { name, email, password } = req.body

//     try {
//         const user = await Accounts.signup(name, email, password)
//         res.status(200).json({ message: "Account Created Successfully!" })

//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// }

// exports.login = async (req, res) => {
//     const { email, password } = req.body

//     try {
//         const user = await Accounts.login(email, password)
//         const token = createToken(user.id)
//         res.status(200).json({ user, token, message: 'User logged in' })
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// }
