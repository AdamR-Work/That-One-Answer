
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const { log } = require('handlebars');

class User extends Model{

  checkPassword(loginPassword) {
    return bcrypt.compareSync(loginPassword, this.password);
  }
}

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
      hooks: {
        //hash a password before storing it
        // beforeCreate(userData) {
        //     return bcrypt.hash(userData.password, 10).then(hashedPassword => {
        //         newUserData.password = hashedPassword;
        //         return newUserData;
        //     });
        // }
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        //set up beforeUpdate hook
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
      },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
      
    });
      




module.exports = User;