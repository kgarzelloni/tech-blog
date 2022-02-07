const { Model, DataTypes } = require('sequelize');


class Posts extends Model {}
Posts.init({
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false, 
      
    },
   
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Posts' // We need to choose the model name
  });
  
  // the defined model is the class itself
  console.log(Posts === sequelize.models.Posts); // true
  module.exports = Posts;