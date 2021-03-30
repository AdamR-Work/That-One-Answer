// Import the models
const Answer = require('./Answer');
const User = require('./User');
const Steps = require('./Steps');
const Comments = require('./Comments');
const Category = require('./Category');


//-------------------------------------------------
//-------------------------------------------------

// //User associations
User.hasMany(Answer, { 
    foreignKey: 'user_id'
});

User.hasMany(Comments, {
    foreignKey: 'user_id'
});
User.hasMany(Steps, {
    foreignKey: 'user_id'
});

// //Answer associations
Answer.belongsTo(Category, {
    foreignKey: 'category_id'
});
Answer.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});
 Answer.hasMany(Steps,{
     foreignKey:'answer_id'
 });

// //Steps associations
Steps.belongsTo(User, {
    foreignKey: 'user_id',

});
Steps.belongsTo(Answer, {
    foreignKey: 'answer_id',
});
Steps.hasMany(Comments, {
    foreignKey: 'steps_id',
    onDelete: 'cascade'
});


// //Comments associations
Comments.belongsTo(User, {
    foreignKey: 'user_id',
   
});


//Category associations
 Category.hasMany(Answer, {
     foreignKey: 'answer_id'
 });

// Answer.belongsToMany(Answer,{
   
//     foreignKey:'steps_id'
// })

//steps have many 1 user? ? 
//steps have many comments?
Comments.belongsTo(Steps,{
    foreignKey:'steps_id'
})
Answer.hasMany(Comments,{
    foreignKey:'answer_id'
})

Comments.belongsTo(Answer, {
    foreignKey: 'steps_id',
});
module.exports = {User, Answer, Steps, Category, Comments};
