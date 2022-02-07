const { Model, DataTypes } = require('sequelize');


class Comments extends Model {}
Comments.init({
    
    content: {
      type: DataTypes.STRING,
      allowNull: false, 
      
    },
   
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Comments' // We need to choose the model name
  });
  
  // the defined model is the class itself
  console.log(Comments === sequelize.models.Comments); // true
  module.exports = Comments;