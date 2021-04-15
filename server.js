// require modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// intialize the express app
const app = express();
// 

// configure settings

require('dotenv').config()
require('./config/database')

// mount middleware
app.use(morgan('dev'));
app.use(express.json()); //req.body
app.use(cors())

// mount routes
app.use('/api/contacts', require('./routes/api/contacts'));



// tell the app to use port 3001 
const port = process.env.PORT || 3001;
app.listen(port, function(){
    console.log(`express is listening requests on port ${port}`)
})

