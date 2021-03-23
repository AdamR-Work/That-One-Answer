
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Answer extends Model{};

Answer.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
        
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      category_id:{
          type: DataTypes.INTEGER,
          references:{
              model:'category',
              key:'id'
          }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'answer'
    }
  );
module.exports = Answer;