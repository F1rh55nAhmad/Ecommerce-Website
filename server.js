const express =require('express')
const sequelize = require('./config/db.config')
const app = express();



const routes = require('./routers/router');
require('./models');
var userctrl = require('./controllers/usercontrollers');

app.use('/', routes)

app.get("/add", userctrl.addUser);
app.get("/crud", userctrl.crudOperation);



 

app.listen(3002,()=>{
    console.log('Server started on port 3002'); // this is comment from farheen
    console.log('Server started on port 3002'); // this is comment from Zara
});


