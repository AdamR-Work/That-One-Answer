
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class User extends Model{}

User.init(
    {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        username: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
          validate: { 
            isEmail: true
          }
        },
        password: {
          type: DataTypes.STRING,
          validate: {
            len: [4]
          }
        },
        isAdmin:{
            type: DataTypes.INTEGER,
            defaultValue: 0,

        }
    },
    {
        
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
      
    });
      




module.exports = User;