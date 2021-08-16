import React, { useEffect, useState } from "react";
import M from 'materialize-css';
import { useHistory } from "react-router-dom";

const CreatePost = ()=>{
    const history = useHistory();
    const [title,setTitle] = useState('');
    const [body,setBody]  = useState('');
    const [image,setImage]= useState('');
    const [picUrl,setPicUrl] = useState('');
    useEffect(()=>{
        if(picUrl){  fetch('/post/create',{
            method:'post',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer'+ localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                title,
                body,
                pic:picUrl
            })
        }).then(res=>res.json())
        .then(data=>{
          //  console.log(data);
            if(data.error){
                  M.toast({html:data.message,classes:"#e53935 red darken-1"});
    
            }
            else{
                M.toast({html:data.message,classes:"#4caf50 green"});
                history.push('/');
            }
        })}
      
    },[picUrl,body,title,history])
    const postDetails = ()=>{
        const data =   new FormData();
        data.append("file", image);
        data.append("upload_preset","instagram-clone")
        data.append("cloud_name","dj0jmz1eg")
        fetch("https://api.cloudinary.com/v1_1/dj0jmz1eg/image/upload",{
            method:"post",
            body:data
        }).then(res=>{
            res.json()
            .then(datas=>{
                console.log(datas.url);
             setPicUrl(datas.url);
               console.log(picUrl);
               console.log(title);
            })

        }).catch(err=>{
            console.log(err);
        })

    }
    return(
<div className="card input-field">
<input type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
<input type="text" placeholder="body" value={body} onChange={(e)=>setBody(e.target.value)}></input>
<div className="file-field input-field">
<div className="btn">
  <span>Upload Image</span>
  <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
</div>
<div className="file-path-wrapper">
  <input className="file-path validate" type="text"/>
</div>
</div>
<button class="btn waves-effect waves-light #64b5f6 blue lighten-2" type="submit" name="action" onClick={()=>postDetails()}>
Create Post
</button>
</div>
    )
}

export default CreatePost;