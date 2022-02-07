const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt'),

class User extends Model {
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
   }

User.init({
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        len: [8],
      },
    
    },
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false, 
        primaryKey: true,
    }
  },   {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,

    modelName: "User",
  })
  
  // the defined model is the class itself
  console.log(User === sequelize.models.User); // true
  module.exports = User;