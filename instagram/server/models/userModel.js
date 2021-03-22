const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({ // defining the user data model
    firstName:{
        type:String,
        required:true,
        min:[2, 'Name should be more than 2 characters'],
        max:[32, 'Name should be less than 32 characters']
    },
    lastName:{
        type:String,
        required:true,
        min:[2, 'Name should be more than 2 characters'],
        max:[32, 'Name should be less than 32 characters']
    },
    email:{
        type:String,
        required:true,
        unique:true,   // email should be unique for everyone
        index:true,    // it can be queried by email
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    },
    followers:[{
    type:ObjectId,
    ref:'user'
    }],
    followings:[{
        type:ObjectId,
        ref:'user'
    }],
    timestamps:{
        type:Date,
        default:Date.now()
    }
});

// creating user model
mongoose.model('user',userSchema);  // defines collection name where we will insert this all data

// exporting the model
module.exports = mongoose.model('user');