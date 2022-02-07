const User =require('./user');
const Posts =require('./posts');
const { belongsTo } = require('./user');
const Comments = require('./comments');


Posts.belongsTo(User, {
    //association
})

Posts.hasMany(Comments, {
    //association
})

Comments.belongsTo(User, {
    foreignKey: 'userId'
})

module.exports = {User, Comments, Posts}