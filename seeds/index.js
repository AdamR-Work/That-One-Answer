const seedUsers = require('./user-seeds');
const seedCategories = require('./category-seeds');
const seedAnswers = require('./answer-seeds');
// const seedSteps = require('./step-seeds');
// const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });

    console.log('--------------Seeding Users');
    await seedUsers();

    console.log('--------------Seeding Categories');
    await seedCategories();

    console.log('--------------Seeding Answers');
    await seedAnswers();

    // console.log('--------------Seeding Steps');
    // await seedSteps();

    // console.log('--------------Seeding Comments');
    // await seedComments();

    console.log('--------------Done!');
    process.exit(0);
};

seedAll();