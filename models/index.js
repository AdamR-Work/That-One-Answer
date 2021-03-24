// Import the models
const Answer = require('./Answer');
const User = require('./User');
const Steps = require('./Steps');
const Comments = require('./Comments');
const Category = require('./Category');

//  ANSWERS ARE POSTS/TOPICS BASICALLY 

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



module.exports = {User, Answer, Steps, Category, Comments};