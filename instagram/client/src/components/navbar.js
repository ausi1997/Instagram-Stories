import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { UserContext } from '../App';

const Navbar = ()=>{
  const{state,dispatch} = useContext(UserContext);
  const render = ()=>{
    if(state){
      return[
        <li><Link to="/">Home</Link></li>,
          <li><Link to="/profile" >Profile</Link></li>,
        <li><Link to="/create" >Create</Link></li>
    ]    
    }
    else{
      return[
        <li><Link to="/login">Login</Link></li>,
        <li><Link to="/signup">Signup</Link></li>
      ]
    }
  }
return(
    <nav>
    <div className="nav-wrapper white">
      <a href="/" className="brand-logo left">Instagram</a>
      <ul id="nav-mobile" className="right">
        {render()}
      </ul>
    </div>
  </nav>
)
}
export default Navbar;