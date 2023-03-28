const express =require('express')
const sequelize = require('./config/db.config')
const app = express();



const routes = require('./routers/router');
require('./models');
var userctrl = require('./controllers/usercontrollers');
var cartctrl = require('./controllers/cartcontrollers');

app.use('/', routes)

app.get("/add", userctrl.addUser);
app.get("/crud", userctrl.CrudOperation);

app.get("/getall", cartctrl.getAllProducts);
app.get("/getone", cartctrl.getOneProduct);
app.get("/delete", cartctrl.deleteProduct);

 

app.listen(3002,()=>{
    console.log('Server started on port 3002'); // this is comment from farheen
    console.log('Server started on port 3002'); // this is comment from Zara
});


