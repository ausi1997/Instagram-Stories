import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../App';

const OtherProfile = ()=>{
    const [profile,setProfile] = useState(null);
    const {dispatch} = useContext(UserContext);
    const {userid} = useParams();
    const [followButton,setFollowButton] = useState(true);
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
        })
    },[userid])

    const follow = ()=>{
        fetch('/user/follow',{
            method:'put',
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer" + localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                followId:userid
            })
        }).then(res=>res.json())
        .then(data=>{
           console.log(data);
           dispatch({type:"UPDATE",payload:{followings:data.followings,followers:data.followers}})
           localStorage.setItem("user",JSON.stringify(data))
           setProfile((prevState)=>{
               return{
                   ...prevState,
                   user:{
                       ...prevState.user,
                       followers:[...prevState.user.followers,data._id]
                   }
               }
           })
           setFollowButton(false)
    })
    
}

const unfollow = ()=>{
    fetch('/user/unfollow',{
        method:'put',
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer" + localStorage.getItem("jwt")
        },
        body:JSON.stringify({
            followId:userid
        })
    }).then(res=>res.json())
    .then(data=>{
       console.log(data);
       dispatch({type:"UPDATE",payload:{followings:data.followings,followers:data.followers}})
       localStorage.setItem("user",JSON.stringify(data))
       setProfile((prevState)=>{
           const updateFollowers = prevState.user.followers.filter(item=>
               item!==data._id
           )
           return{
               ...prevState,
               user:{
                   ...prevState.user,
                   followers:updateFollowers
               }
           }
       })
       setFollowButton(true)
})

}
    
    return(
        <div style={{margin:"auto",maxWidth:"650px"}}>
        <div style={{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"2px solid black"}}>
        <div>
        <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
         src={profile&& profile.user.profilePic} alt="loading..."></img>
        </div>
        <div><h4>{profile&& profile.user.firstName + " " + profile.user.lastName}</h4>
        <div style={{display:"flex",justifyContent:"space-between",width:"115%"}}>
        <h5>{profile&& profile.posts.length} posts</h5>
        <h5> {profile && profile.user.followers.length} followers</h5>
        <h5>{profile && profile.user.followings.length} followings</h5>
        </div>
        {
            followButton?
            <button style={{margin:"10px"}} class="btn waves-effect waves-light #64b5f6 blue lighten-2" type="submit" name="action" onClick={()=>follow()}>
        Follow
        </button>
        :
        <button style={{margin:"10px"}} class="btn waves-effect waves-light #64b5f6 blue lighten-2" type="submit" name="action" onClick={()=>unfollow()}>
        UnFollow
        </button>
        }
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