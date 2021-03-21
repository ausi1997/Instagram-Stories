import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';

const Home = ()=>{
    const [data,setData] = useState([]);
    const {state,dispatch} = useContext(UserContext);
 useEffect(()=>{
  fetch('/post/view',{
      headers:{
          "Authorization":"Bearer" + localStorage.getItem("jwt")
      }
  }).then(res=>
      res.json()
  ).then(result=>{
     console.log(result);
      setData(result);
     // console.log(data);
  }).catch(err=>{
      console.log(err);
  })
 },[])
// like
 const like = (id)=>{
  fetch('/post/like',{
      method:"put",
      headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer" + localStorage.getItem("jwt")
      },
      body:JSON.stringify({
          postId:id
      })
  }).then(res=>
      res.json()
  ).then(result=>{
     console.log(result);
    const newData = data.map(item=>{
        if(item._id==result._id){
            return result
        }
        else{
            return item
        }
    })
    setData(newData);
  })
 }
// dislike
 const dislike = (id)=>{
    fetch('/post/unlike',{
        method:"put",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer" + localStorage.getItem("jwt")
        },
        body:JSON.stringify({
            postId:id
        })
    }).then(res=>
        res.json()
    ).then(result=>{
       console.log(result);
      const newData = data.map(item=>{
        if(item._id==result._id){
            return result
        }
        else{
            return item
        }
    })
    setData(newData);
    })
   }
    return(
        <div className="home">
        {    data&&
            data.map(item=>{
                return(
                    <div className="home-card">
                    <h5>{item.postedBy.firstName}</h5>
                    <div className="card-image">
                    <img src={item.photo}></img>
                    </div>
                    <div className="card-content">
                    <i className="material-icons" style={{color:"red"}}>favorite</i>
                    {
                        item.likes.includes(state._id)
                        ? <i className="material-icons" onClick={()=>dislike(item._id)}>thumb_down</i>
                        : <a><i className="material-icons" onClick={()=>like(item._id)}>thumb_up</i></a>
                    }
                    
                    
                    <h6>{item.likes.length + " "+ "likes"}</h6>
                    <h6>{item.title}</h6>
                    <p>{item.body}</p>
                    <input type="text" placeholder="add a comment..."></input>
                    </div>
                    </div>
                )
            })
        }
       
        </div>
    )
}

export default Home;