const Post = require('../models/postModel');  // importing the post module
const requireLogin = require('../middleware/auth');
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');

// default function

exports.defaultroute = (req,res)=>{
       Post.find()
       return res.json({
           status:true,
           message:'Route is working....'
       });
}
// creating a storage where post images will be stored

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads')) // joining the dir path
    },
    filename: function (req, file, cb) {    // generating a id for file name
      cb(null, shortid.generate()+ '-' + file.originalname)
    }
  });
  exports.upload = multer({storage});
  

// function to create post

exports.createPost = (req,res)=>{
    const {title,body} = req.body
    const photo = req.file
    if(!title || !body || !photo){    
        return res.json({
            status:false,
            message:'Please add the fields...'
        });
    }
    const post = new Post({  // creating a new post
        title,
        body,
        photo:req.file.path,
        postedBy:req.user  // this will give that which user has posted this post
    });
    post.save().then(result=>{  // saving the data in database
        res.json({
            post:result
        });
    })
    .catch(err=>{
        res.json({
            err
        });
    })
}

// function to view all post

exports.viewpost = (req,res)=>{
    Post.find()
  //  .populate("postedBy", "_id firstName")
    .then(posts=>{
        return res.json(posts);
    })
    .catch(err=>{
        return res.json(err);
    })
}

// function to view only my post

exports.mypost = (req,res)=>{
    Post.find({postedBy:req.user._id}) // quering the database by postby 
    .then(myposts=>{
           return res.json({myposts});
    })
    .catch(err=>{
        return res.json({err});
    })
}

// function for likes

exports.likes = (req,res)=>{
    Post.findByIdAndUpdate(req.body.postId, {  // we will pass the id of post 
        $push:{likes:req.user._id} // using push to add the likes in the array
    }, {
        new:true  // so that we get the updated record
    }).exec((err,result)=>{
        if(err){        // executing the query
            return res.json(err);
        }
        else{
            return res.json(result);
        }
    })   
}

// function to unlike

exports.unlikes = (req,res)=>{
    Post.findByIdAndUpdate(req.body.postId, {
        $pull:{likes:req.user._id}  // using pull to reduce the value from array
    }, {
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.json(err);
        }
        else{
            return res.json(result);
        }
    })   
}

// functions to add comments on post

exports.commentRoute = (req,res)=>{
    const comments = {   // so we will be sending the text from req
        text:req.body.text,
        postedBy:req.user._id
    }
    Post.findByIdAndUpdate(req.body.postId, {  //  passing the id of post
        $push:{comment:comments}  // using push to add the new comments in the array
        }, {
            new:true  // to update the record
        }).exec((err,result)=>{
            if(err){
                return res.json(err);
            }
            else{
                return res.json(result);
            }
        })
}