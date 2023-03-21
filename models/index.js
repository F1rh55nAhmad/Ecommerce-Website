const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('test' , 'root' , '1234' , {
    host : 'localhost',
    dialect : 'mysql'
});

Sequelize.authenticate()
.then(() => {
    console.log('Connection has been Established!');
})
.catch(err=>{
    console.log("Error while connecting"+ err);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize ;

db.users = require('./users.model.js')(sequelize,DataTypes);

db.sequelize.sync({force : true})
.then(()=>{
    console.log("YES!, it is re-synced!");
})
db.users = require('./users')(sequelize,DataTypes);
module.exports = db;