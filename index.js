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

//settings
app.use(express.static("public"))
app.use(express.json())


//routes
routerApi(app);


//run server
app.listen(port,()=> {console.log(`Running API port ${port}`)})
