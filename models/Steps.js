
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Steps extends Model{};
Steps.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      step_text: {
        type: DataTypes.STRING,
      },
      step_number:{
          type: DataTypes.INTEGER,
          defaultValue:0
      },
      user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
      },
      // answer_id: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: 'answer',
      //     key: 'id'
      //   }
      // }

    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'steps'
    }
  );

module.exports = Steps;