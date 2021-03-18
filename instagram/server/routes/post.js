const express = require('express');
const router = express.Router();
//const multer = require('multer');
//const upload = multer({dest:'uploads/'});

const defaultRoute = require('../controllers/postControl');
const requireLogin = require('../middleware/auth');

//default route
router.all('/', requireLogin ,defaultRoute.defaultroute);

// createpost route
router.post('/create',requireLogin,defaultRoute.upload.single('photo'), defaultRoute.createPost);

// view all post
router.get('/view', defaultRoute.viewpost);

// view my post
router.get('/mypost',requireLogin, defaultRoute.mypost);

// route to like the post
router.put('/like', requireLogin, defaultRoute.likes);

// route to unlike the post
router.put('/unlike', requireLogin, defaultRoute.unlikes);

// route to comment on the post
router.put('/comment', requireLogin, defaultRoute.commentRoute);


module.exports=router;