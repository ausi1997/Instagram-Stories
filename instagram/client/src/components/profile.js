import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';

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
         src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"></img>
        </div>
        <div><h4>{state?state.firstName + " " + state.lastName:"loading..."}</h4>
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
             <i className="small material-icons" onClick={()=>{deletePost(item._id)}}>delete_forever</i> 
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