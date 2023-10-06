// const db = require('../config/db')
// // const timestamp = require('../middlewares/timestamp')
// const validator = require('validator')
// const bcrypt = require('bcrypt')
// const uuid = require('uuid')

// class Accounts {

//     static async signup(name, email, password) {

//         const id = uuid.v4()
//         // const created_at = await timestamp()

//         // validate email and password
//         if (!name || !email || !password) throw Error('All fields must be filled')
//         if (!validator.isEmail(email)) throw Error("Invalid Email Address")

//         // { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }
//         // if (!validator.isStrongPassword(password)) throw Error("Password not strong enough")

//         const isExist = await this.userExist(email)

//         if (isExist) throw Error('User Exists')
//         else {
//             // to hash the password
//             const salt = await bcrypt.genSalt(10)
//             const hash = await bcrypt.hash(password, salt)

//             let sql = `INSERT INTO signup (user_id, name, email, password)
//                     VALUES ('${user_id}','${name}', '${email}', '${hash}')
//         `
//             await db.execute(sql)
//         }


//     }

//     static async login(email, password) {

//         // validate email and password
//         if (!email || !password) throw Error('All fields must be filled')
//         if (!validator.isEmail(email)) throw Error("Invalid Email Address")

//         // { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }
//         // if (!validator.isStrongPassword(password)) throw Error("Password not strong enough")

//         const user = await this.userExist(email)

//         if (!user) throw Error('User does not exist')
//         const match = await bcrypt.compare(password, user.password)

//         if (!match) throw Error('Incorrect password')

//         return { id: user.user_id, name: user.name }


//     }

//     static async userExist(email) {
//         let sql = `SELECT * FROM signup WHERE email='${email}'`

//         const [user] = await db.execute(sql)

//         return user[0]
//     }
// }

// module.exports = Accounts