import React, { useEffect, useState } from 'react';

const Home = ()=>{
    const [data,setData] = useState([]);
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
 },[data])
    return(
        <div className="home">
        {
            data.map(item=>{
                return(
                    <div className="home-card">
                    <h5>{item.postedBy.firstName}</h5>
                    <div className="card-image">
                    <img src={item.photo}></img>
                    </div>
                    <div className="card-content">
                    <i className="material-icons" style={{color:"red"}}>favorite</i>
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