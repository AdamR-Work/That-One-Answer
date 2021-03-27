const sequelize = require('../config/connection');
const {User} = require('../models');

const userData = [
  {
    username: 'adam',
    email: 'adam@adam.com',
    isAdmin: 1,
    password: 'password123'
  },
  {
    username: 'myles',
    email: 'myles@myles.com',
    isAdmin: 1,
    password: 'password123'
  },
  {
    username: 'james',
    email: 'james@james.com',
    isAdmin: 1,
    password: 'password123'
  },
  {
    username: 'chris',
    email: 'chris@chris.com',
    isAdmin: 1,
    password: 'password123'
  },
  {
    username: 'warren',
    email: 'warren@warren.com',
    isAdmin: 1,
    password: 'password123'
  },
  {
    username: 'bob',
    email: 'bob@bob.com',
    isAdmin: 0,
    password: 'password123'
  },
  {
    username: 'morgan',
    email: 'morgan@morgan.com',
    isAdmin: 0,
    password: 'password123'
  },
  {
    username: 'ruby',
    email: 'ruby@ruby.com',
    isAdmin: 0,
    password: 'password123'
  },
  {
    username: 'kenny',
    email: 'loggins@google.com',
    isAdmin: 0,
    password: 'password123'
  },
  {
    username: 'jenny',
    email: 'jenny@wisconsin.gov',
    isAdmin: 0,
    password: 'password123'
  },
  {
    username: 'admin',
    email: 'admin@admin.com',
    isAdmin: 1,
    password: 'adminadmin'
  },
  {
    username: 'user',
    email: 'user@user.com',
    isAdmin: 0,
    password: 'useruser'
  }
];

// const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
