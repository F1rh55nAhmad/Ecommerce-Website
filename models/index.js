const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('test' , 'root' , '1234' , {
    host : 'localhost',
    dialect : 'mysql'
});

sequelize.authenticate()
.then(() => {
    console.log('Connection has been Established!');
})
.catch(err=>{
    console.log("Error while connecting"+ err);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize ;

db.users = require('./usermodel.js')(sequelize,DataTypes);

db.sequelize.sync({force : false})
.then(()=>{
    console.log("YES!, it is re-synced!");
})
db.users = require('./usermodel.js')(sequelize,DataTypes);
module.exports = db;