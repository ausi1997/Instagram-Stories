import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import {Link} from 'react-router-dom';

const Profile = ()=>{
    const [mypics,setPics] = useState();
    const {state,dispatch} = useContext(UserContext);
    const [image,setImage] = useState('');
  //  const [url,setUrl]     = useState('');
    useEffect(()=>{
        fetch('/post/mypost',{
            headers:{
                "Authorization":"Bearer" + localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
           console.log(result);
            //console.log(result.myposts);
            setPics(result.myposts);
            console.log(mypics);
        })
    },[])
    const deletePost = (id)=>{
        fetch(`/post/delete/${id}`,{
            method:"delete",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer" + localStorage.getItem("jwt")
            }
        }).then(res=>
            res.json()
        ).then(result=>{
           console.log(result);
           const newData = mypics.filter(item=>{
               return item._id!== result._id
           })
           setPics(newData);
        })
       }

       useEffect(()=>{
           if(image){
            const data =   new FormData();
            data.append("file", image);
            data.append("upload_preset","instagram-clone")
            data.append("cloud_name","dj0jmz1eg")
            fetch("https://api.cloudinary.com/v1_1/dj0jmz1eg/image/upload",{
                method:"post",
                body:data
            }).then(res=>{
                res.json()
                .then(data=>{
                    console.log(data)
                    fetch('/user/updatePic',{
                        method:"put",
                        headers:{
                            "Content-Type":"application/json",
                            "Authorization":"Bearer" + localStorage.getItem("jwt")
                        },
                        body:JSON.stringify({
                            profilePic:data.url
                        })
                    }).then(res=>res.json())
                    .then(result=>{
                        console.log(result)
                        localStorage.setItem("user",JSON.stringify({...state,profilePic:result.profilePic}))
                        dispatch({type:"PDATEPIC",payload:result.profilePic})
                        window.location.reload();
                    })
                })
    
            }).catch(err=>{
                console.log(err);
            })
           }
       },[image])

       const updatePic = (file)=>{
        setImage(file)
       }
    
    
    return(
        <div style={{margin:"auto",maxWidth:"650px"}}>
        <div style={{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"2px solid black"}}>
        <div>
        <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
         src={state?state.profilePic:"loading..."}></img>
         <div className="file-field input-field">
<div className="btn waves-effect waves-light #64b5f6 blue lighten-2">
  <span>Update</span>
  <input type="file" onChange={(e)=>updatePic(e.target.files[0])}/>
</div>
<div className="file-path-wrapper">
  <input className="file-path validate" type="text"/>
</div>
</div>
        </div>
        <div><h4>{state?state.firstName + " " + state.lastName:"loading..."}</h4>
        <h5>{state?state.username:"loading..."}</h5>
        <div style={{display:"flex",justifyContent:"space-between",width:"115%"}}>
        <h5>{mypics && mypics.length} posts</h5>
        <h5>{state?state.followers.length:0} followers</h5>
        <h5>{state?state.followings.length:0} followings</h5>
        </div>
        </div>
        </div>
        <div className="gallery">
        {
        mypics&&
          mypics.map(item=>{
              return(
             <div>    
             <Link><i className="small material-icons" onClick={()=>{deletePost(item._id)}}>delete_forever</i></Link> 
             <img className="item" src={item.photo} alt={item.title}></img>
             </div> 
              )
            })
        }
        </div>
        </div>
    )
}

export default Profile;