// Import the models
const Answer = require('./Answer');
const User = require('./User');
const Steps = require('./Steps');
const Comments = require('./Comments');
const Category = require('./Category');


//-------------------------------------------------
//-------------------------------------------------

// //User associations
// User.hasMany(Answer, { 
//     foreignKey: 'user_id'
// });

// User.hasMany(Comments, {
//     foreignKey: 'user_id'
// });
// User.hasMany(Steps, {
//     foreignKey: 'user_id'
// });

// //Answer associations
// // Answer.hasOne(Category, {
// //     foreignKey: 'category_id'
// // });
// Answer.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'cascade'
// });
// // Answer.hasMany(Steps,{
// //     foreignKey:'answer_id'
// // });

// //Steps associations
// Steps.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'cascade'
// });
// Steps.belongsTo(Answer, {
//     foreignKey: 'answer_id',
// });
// Steps.hasMany(Comments, {
//     foreignKey: 'steps_id',
//     onDelete: 'cascade'
// });


// //Comments associations
// Comments.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'cascade'
// });
// Comments.belongsTo(Steps, {
//     foreignKey: 'steps_id',
//     onDelete: 'cascade'
// });

// //Category associations
// // Category.hasMany(Answer, {
// //     foreignKey: 'answer_id'
// // });


//steps have many 1 user? ? 
//steps have many comments?

module.exports = {User, Answer, Steps, Category, Comments};
