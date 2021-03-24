// Import the models
const Answer = require('./Answer');
const User = require('./User');
const Steps = require('./Steps');
const Comments = require('./Comments');
const Category = require('./Category')


//categories have many answers
Category.hasMany(Answer,{
    foreignKey: 'category_id'});
//answers can have many  categories maybe ??? ??? ?  we have to decide on routing, sub category/answer 

//answer belongs to 1 cat
Answer.belongsTo(Category,{
    foreignKey:'category_id'
})

//answers have many steps
Answer.hasMany(Steps,{
    foreignKey:'answer_id'
})
//steps belong to only 1 answer
Steps.belongsTo(Answer,{
    foreignKey:'answer_id'
})
//steps can have many comments?
Steps.hasMany(Comments,{
    foreignKey:'steps_id'
})
//answers have many users
Answer.hasMany(User,{
    foreignKey:'user_id'
})
//comments belong to only 1 step
Comments.belongsTo(Steps,{
    foreignKey:'steps_id'
})



//steps have many 1 user? ? 
//steps have many comments?

module.exports = {User, Answer, Steps, Category, Comments};