//Dependencias
const express = require('express');
const app = express();
require('dotenv').config()


//Environment variables
const port = process.env.PORT || 3001

//database
require('./database/db')

//modules
const routerApi = require('./routes')
const { boomErrorHandler } = require('./middlewares/errorHandler')

//settings
app.use(express.static("public"))
app.use(express.json())


//routing
routerApi(app);

//middlewares
//app.use(boomErrorHandler)


//run server
app.listen(port,()=> {console.log(`Running API port ${port}`)})
