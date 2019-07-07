const Sequelize = require('sequelize');
//=======================================================================
const sequelize = new Sequelize('myTestDB', 'postgres', 'dont4get', {
  host: 'localhost',
  dialect: 'postgres',
  port:5433,
  pool: {
    max: 5,
    min: 0, 
    acquire: 30000,
  //  idle: 10000
  }
});
module.exports = sequelize;