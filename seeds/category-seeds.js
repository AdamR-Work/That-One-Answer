const sequelize = require('../config/connection');
const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'HTML'
  },
  {
    category_name: 'CSS'
  },
  {
    category_name: 'Advanced CSS'
  },
  {
    category_name: 'JavaScript'
  },
  {
    category_name: 'Web APIs'
  },
  {
    category_name: 'Third Party APIs'
  },
  {
    category_name: 'Server Side APIs'
  },
  {
    category_name: 'Node'
  },
  {
    category_name: 'OOP'
  },
    {
    category_name: 'Express'
  },
  {
    category_name: 'SQL'
  },
  {
    category_name: 'ORM'
  },
  {
    category_name: 'MVC'
  },
];

const seedCategories = () => User.bulkCreate(categoryData);

module.exports = seedCategories;
