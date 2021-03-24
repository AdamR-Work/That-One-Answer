// Import the models
const Answer = require('./Answer');
const User = require('./User');
const Steps = require('./Steps');
const Comments = require('./Comments');
const Category = require('./Category')


<<<<<<< HEAD
// // //category has many answers
// Category.hasMany(Answer,{
//     foreignKey: 'category_id'
// });
// // // the answers belong to the category
// Answer.belongsTo(Category,{
//     foreignKey:'category_id'
// })
// // the answers belong to the user
// Answer.belongsTo(User,{
//     foreignKey:'user_id'
// })
// // the answers/posts have steps in them
// // they belong to the user or answer or both?
// Steps.belongsTo(User,{
//     foreignKey:'user_id'
    
// })
// // you can comment on steps.
// // the steps belong to the user or the step or both technically?
// Comments.belongsTo(User,{
//     foreignKey:'user_id'
// })

// // the user can make many answers/posts
// User.hasMany(Answer,{
//     foreignKey:'user_id'
// })

// ///////////////////////////

// // Steps.belongsTo(Answer,{
// //     foreignKey:'answer_id'
    
// // })
// User.hasMany(Comments,{
//     foreignKey:'user_id'
// })

// //answers have many steps
// // Answer.hasMany(Steps,{
// //     foreignKey:'answer_id'
// // })

// //steps can have many comments
// Steps.hasMany(Comments,{
//     foreignKey:'step_id'
    
// })

// //comments belong to only 1 step
// Comments.belongsTo(Steps,{
//     foreignKey:'step_id'
    
// })
// Comments.belongsTo(User,{
//     through: Steps,
//     foreignKey:'user_id'
    
// })
=======
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
>>>>>>> 2d2cadaed44d1557cf3985b29f45622055f4bc23

// //Category associations
// // Category.hasMany(Answer, {
// //     foreignKey: 'answer_id'
// // });


//steps have many 1 user? ? 
//steps have many comments?

module.exports = {User, Answer, Steps, Category, Comments};
