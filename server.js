const express =require('express')
const app = express();

const routes = require('./routers/router');

 app.use('/', routes)

app.listen(3002,()=>{
    console.log('Server started on port 3002'); // this is comment from farheen
    console.log('Server started on port 3002'); // this is comment from farheen
});


