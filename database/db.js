const mongoose = require('mongoose')

mongoose.connect(process.env.URI)
    .then(()=>{console.log('connected to database')})
    .catch((e)=>{console.log('fail connect'+ e)})

