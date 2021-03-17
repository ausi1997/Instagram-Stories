const express = require('express');
const app = express();           // importing the required modules
const bodyParser = require('body-parser');
const cors = require('cors');

// importing the  db module
const db = require('./models/db');

const userRoutes = require('./routes/user');

const postRoutes = require('./routes/post');

app.use(cors());

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

// assigning the port
app.listen('7001',()=>{
    console.log('Server is running on the port 7001');
});