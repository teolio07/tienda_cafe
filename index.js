//Dependencias
const express = require('express');
const app = express();
require('dotenv').config()


//Environment variables
const port = process.env.PORT || 3001

//modules
require('./database/db')
const routerApi = require('./routes')

//settings
app.use(express.static("public"))
app.use(express.json())


//routes
routerApi(app);

app.listen(port,()=> {console.log(`Running API port ${port}`)})
