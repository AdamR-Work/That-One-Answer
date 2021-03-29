const LocalStrategy = require('passport-local').Strategy
// const bcrypt = require('bcrypt');
const db = require('../models')

// function initialize(passport, getUserByEmail, getUserById){
//     const authenticateUser = async (email, password, done)=>{
//         const user= getUserByEmail(email)
//         if(user == null){
//             return done( null, false, {message: 'No user with that email'})
//         }
//         try {
//             if (await bcrypt.compare(password, user.password)) {
//                 return done(null,user)
//             } else {
//                 return done(null, false, {message:'Password incorrect'})
//             }
//         } catch (e){
//             return done(e)
            
//         }

//     }
//     passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUser))
//     passport.serializeUser((user, done) => done(null, user.id))
//     passport.deserializeUser((user, done) => {
//         done(null, getUserById.id)
//     })
// }

const strategy = new LocalStrategy(
    {
        usernameField: "email"
    },
    function(email, password, done) {
        db.User
            .findOne({where: {email: email}}, (err, user) => {
                if (err) {
                    console.log("error sux")
                    return done(err)
                }
                if(!user) {
                    console.log("waddup")
                    return done(null, false, {message: "Incorrect User"})
                }
                // if(!user.checkPassword(password)) {
                //     console.log('oops')
                //     return done(null, false, { message: 'Incorrect Pass'})
                // }
                console.log(user)
                return done(null, user)
            })
    }
)

module.exports = strategy;