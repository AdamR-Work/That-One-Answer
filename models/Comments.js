const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Comments extends Model{};
Comments.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      comment_text: {
        type: DataTypes.STRING,
        allowNull: false
      },
      step_id:{
        type: DataTypes.INTEGER,
        references:{
            model:'steps',
            key: 'id'
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'comments'
    }
  );

module.exports = Comments;