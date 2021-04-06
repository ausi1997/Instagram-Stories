const mongoose  = require('mongoose');

const URL = 'mongodb+srv://ausi97:ausi@1997@cluster0.fhhec.mongodb.net/instagram?retryWrites=true&w=majority';

mongoose.connect(URL, {useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:true},(err)=>{
// check error   
if(err){
        console.log('DB Connection fails' +err);
    }
    // if ok
    else{
   console.log('DB is Connected....');
    }
});