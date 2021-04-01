//table containing the answer (and the question)
// id -- title/question -- category

const { Answer } = require('../models');

const answerData = [
    {
        title: 'How to plant a tree?',
        description: 'Steps for properly planting a native species tree in  your backyard.',
        category_id: 1,
        user_id: 10
    },
    {
        title: 'How to retire early?',
        description: 'Steps for getting a place where work might be optional or you can do what you want for work.',
        category_id: 2,
        user_id: 1
    },
    {
        title: 'When to say yes to the offer?',
        description: 'Steps for knowing when to take a job and when to walk out the door.',
        category_id: 3,
        user_id: 2
    },
    {
        title: 'What to do in case of an alien invasion?',
        description: 'Steps for protecting your loved ones and surviving the slaughter.',
        category_id: 4,
        user_id: 3
    },
    {
        title: 'How to plan a child\'s birthday party?',
        description: 'Steps to budget, plan and properly invite the right people for your child\'s birthday.',
        category_id: 5,
        user_id: 11
    },
    {
        title: 'How to install an npm package?',
        description: 'Simple steps for installing npm package into your Node project',
        category_id: 6,
        user_id: 12
    },
    {
        title: 'How to build a Node CLI app?',
        description: 'Steps for building your own CLI app to collect and store data.',
        category_id: 7,
        user_id: 4
    },
    {
        title: 'How to deploy an app to Heroku?',
        description: 'Steps for getting your app on the web and used by the people.',
        category_id: 8,
        user_id: 5
    },
    {
        title: 'How to take care of a tree?',
        description: 'Now you are a tree hugger, do these steps take care of them and make sure they thrive.',
        category_id: 9,
        user_id: 6
    },
    {
        title: 'How to search for a new house?',
        description: 'What are the best steps to finding a home to rent or buy.',
        category_id: 10,
        user_id: 7
    },
    {
        title: 'How to use a crock pot?',
        description: 'Steps for preparing the best meals with minimum effort.',
        category_id: 11,
        user_id: 8
    },
    {
        title: 'How to get strong?',
        description: 'Steps for doing the best movements that will make you stronger.',
        category_id: 12,
        user_id: 9
    }
];

const seedAnswers = () => Answer.bulkCreate(answerData);

module.exports = seedAnswers;