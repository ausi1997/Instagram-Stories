import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../App';

const OtherProfile = ()=>{
    const [profile,setProfile] = useState(null);
    const {state,dispatch} = useContext(UserContext);
    const {userid} = useParams();
    useEffect(()=>{
        fetch(`/user/profile/${userid}`,{
            headers:{
                "Authorization":"Bearer" + localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
           console.log(result);
            //console.log(result.myposts);
        
            setProfile(result);
            console.log(profile);
        })
    },[])
    
    
    
    return(
        <div style={{margin:"auto",maxWidth:"650px"}}>
        <div style={{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"2px solid black"}}>
        <div>
        <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
         src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"></img>
        </div>
        <div><h4>{profile&& profile.user.firstName + " " + profile.user.lastName}</h4>
        <div style={{display:"flex",justifyContent:"space-between",width:"115%"}}>
        <h5>{profile&& profile.posts.length} posts</h5>
        <h5> 200 followers</h5>
        <h5>250 following</h5>
        </div>
        </div>
        </div>
        <div className="gallery">
       {
           profile&&
           profile.posts.map(item=>{
               return(
                   <img className="item" src={item.photo} alt={item.title}></img>
               )
           })
       }
        </div>
        </div>
    )
}

export default OtherProfile;