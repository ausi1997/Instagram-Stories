const express = require('express');
const app = express();           // importing the required modules
const bodyParser = require('body-parser');
//const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 7001;

// importing the  db module
const db = require('./models/db');

const userRoutes = require('./routes/user');

const postRoutes = require('./routes/post');

//app.use(cors());

 // parse requests of content-type - application/json
 app.use(bodyParser.json());

 // parse requests of content-type - application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: true }));
 

// default route
app.all('/',(req,res)=>{
    res.send('Wlecome to instagram');
});

// user route
app.use('/user', userRoutes);

// post route
app.use('/post', postRoutes);

if(process.env.NODE_ENV == "production"){
    app.use(express.static('client/build'))
    const path =require('path');
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

// assigning the port
app.listen(PORT,()=>{
    console.log('Server is running on the port 7001');
});