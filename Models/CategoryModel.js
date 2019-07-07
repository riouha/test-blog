const Sequelize = require('sequelize');
const sequelize = require('../Database/dbConfig');
//======================================================
const Category = sequelize.define('categories', {
    name:{type: Sequelize.STRING,allowNull:false}
});
module.exports = Category;

// async function createUser(userObj){    
//     const user = await Product.create({
//          firstName: userObj.firstName,
//          lastName: userObj.lastName });
//          return user;
// }
// async function deleteUser(userId){
//     const result = await User.destroy({where: {id: userId}});
//     return result;
// }
// async function updateUser(userObj){    
//     const user = await User.Update({
//          firstName: userObj.firstName,
//          lastName: userObj.lastName },
//          {where: {id: userId}}
//          );
//          return user;
// }
// module.exports.createUser = createUser;
// module.exports.deleteUser = deleteUser;
// module.exports.updateUser = updateUser;
// module.exports.createUserTable = createUserTable;
///////////////////======================================================
//   async function createUserTable(){    
//     //create tables
//     const result = await User.sync({force: true}); 
//     //force: true will drop the table if it already exists
//     return result;
//   }
