const express = require('express');
const app = express();
require('dotenv').config()

require('./database/db')

const routerApi = require('./routes')
const Product = require('./models/product')
const port = process.env.PORT || 3001
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('hello from root')
})

routerApi(app);

app.listen(port,()=> {console.log(`Running API port ${port}`)})
