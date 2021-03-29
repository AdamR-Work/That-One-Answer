const passport = require('passport');
const LocalStrategy = require('./localStrategy');
const db = require('../models');

passport.serializeUser((user, done) => {
    console.log('*** serializeUser called, user: ', user, '------')
    done(null, { id: user.id })
})

passport.deserializeUser((id, done) => {
    console.log('DeserializeUser called')
    db.User.findOne(
        {id: id},
        'email',
        (err, user) => {
            console.log('*** Deserialise user, user:', user)
            done(err, user);
        }
    )
})

passport.use(LocalStrategy)
module.exports = passport