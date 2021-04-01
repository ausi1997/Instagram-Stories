import React, { useContext, useEffect, useRef, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { UserContext } from '../App';
import M from "materialize-css";

const Navbar = ()=>{
  const searchModel = useRef(null);
  const [search ,setSearch] = useState('');
  const [userDetails , setUserDetails] = useState([]);
  const history = useHistory();
  const{state,dispatch} = useContext(UserContext);

useEffect(()=>{
M.Modal.init(searchModel.current)
},[])

  const render = ()=>{
    if(state){
      return[
       <Link><li key="1"><i className="material-icons modal-trigger" data-target="modal1" style={{color:"black"}}>search</i></li></Link>,
        <li key="2"><Link to="/">Home</Link></li>,
          <li key="3"><Link to="/profile" >Profile</Link></li>,
        <li key="4"><Link to="/create" >Create</Link></li>,
        <li key="5"> <button class="btn waves-effect waves-light #64b5f6 blue lighten-2" type="submit" name="action"
          onClick={()=>{
            localStorage.clear()
            dispatch({type:"CLEAR"})
            history.push('/login');
          }}>
        Logout
        </button></li>
    ]    
    }
    else{
      return[
        <li><Link to="/login">Login</Link></li>,
        <li><Link to="/signup">Signup</Link></li>
      ]
    }
  }

  const getUsers = (query)=>{
      setSearch(query)
      fetch('/user/search-users',{
        method:"post",
        headers:{
          'Content-Type':'application/json',
          'Authorization':'Bearer'+ localStorage.getItem("jwt")
        },
        body:JSON.stringify({
          query
        })
      }).then(res=>res.json())
      .then(results=>{
        console.log(results);
        setUserDetails(results);
      })

  }
return(
    <nav>
    <div className="nav-wrapper white">
      <a href="/" className="brand-logo left">Instagram</a>
      <ul id="nav-mobile" className="right">
        {render()}
      </ul>
    </div>
  <div id="modal1" class="modal" ref={searchModel} style={{color:"black"}}>
    <div className="modal-content">
    <input type="text" placeholder="search" value={search} onChange={(e)=>getUsers(e.target.value)}></input>
    <ul className="collection">
    {userDetails &&
      userDetails.map(item=>{
    return(
      <Link to={item._id !== state._id?"/profile/"+item._id:'/profile'} onClick={()=>{M.Modal.getInstance(searchModel.current).close()
        setSearch('');
      }}><li className="collection-item">{item && item.username}</li></Link>
     //<li> <img className="collection-item" style={{height:"20px"}} src={item.profilePic}></img></li>
    )  
    })}
  </ul>
    </div>
    <div className="modal-footer">
      <button className="modal-close waves-effect waves-green btn-flat" onClick={()=>{setSearch('')}}>close</button>
    </div>
    </div>
  </nav>
)
}
export default Navbar;