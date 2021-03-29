if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');

const app = express();

const intializePassword = require('./passport-config');
intializePassword(
  passport,
  email => User.find(user=> User.email === email),
  id => User.find(user=> User.id === id)
)


const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// Old way

// const sess = {
//   secret: 'CanOnlyBeOne',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));







const helpers = require('./utils/helpers');
const { User } = require('./models');
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// new way
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave:false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
//end
app.use(require('./controllers/'));

sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});