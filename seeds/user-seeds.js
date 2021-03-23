const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
  {
    username: 'adam',
    email: 'adam@adam.com',
    isAdmin: true,
    password: 'password123'
  },
  {
    username: 'myles',
    email: 'myles@myles.com',
    isAdmin: true,
    password: 'password123'
  },
  {
    username: 'james',
    email: 'james@james.com',
    isAdmin: true,
    password: 'password123'
  },
  {
    username: 'chris',
    email: 'chris@chris.com',
    isAdmin: true,
    password: 'password123'
  },
  {
    username: 'warren',
    email: 'warren@warren.com',
    isAdmin: true,
    password: 'password123'
  },
  {
    username: 'bob',
    email: 'bob@bob.com',
    isAdmin: false,
    password: 'password123'
  },
  {
    username: 'morgan',
    email: 'morgan@morgan.com',
    isAdmin: false,
    password: 'password123'
  },
  {
    username: 'ruby',
    email: 'ruby@ruby.com',
    isAdmin: false,
    password: 'password123'
  },
  {
    username: 'kenny',
    email: 'loggins@google.com',
    isAdmin: false,
    password: 'password123'
  },
  {
    username: 'jenny',
    email: 'jenny@wisconsin.gov',
    isAdmin: false,
    password: 'password123'
  },
  {
    username: 'admin',
    email: 'admin@admin.com',
    isAdmin: true,
    password: 'admin'
  },
  {
    username: 'user',
    email: 'user@user.com',
    isAdmin: false,
    password: 'user'
  }
];

// const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
