const express = require('express');
const router = express.Router();

const defaultRoute = require('../controllers/userControl');  // importing the user module
//const registerRoute = require('../controllers/userControl');
const loginRoute = require('../controllers/userControl');

// defaulte route
router.all('/',defaultRoute.default);

// signup route
router.post('/signup', defaultRoute.register);

// login route
router.post('/login', defaultRoute.signin);

// exporting the router
module.exports=router;