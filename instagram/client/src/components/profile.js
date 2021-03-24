import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import {Link} from 'react-router-dom';

const Profile = ()=>{
    const [mypics,setPics] = useState();
    const {state,dispatch} = useContext(UserContext);
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
    
    
    return(
        <div style={{margin:"auto",maxWidth:"650px"}}>
        <div style={{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"2px solid black"}}>
        <div>
        <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
         src={state?state.profilePic:"loading..."}></img>
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