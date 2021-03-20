import React, { useContext } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { UserContext } from '../App';

const Navbar = ()=>{
  const history = useHistory();
  const{state,dispatch} = useContext(UserContext);
  const render = ()=>{
    if(state){
      return[
        <li><Link to="/">Home</Link></li>,
          <li><Link to="/profile" >Profile</Link></li>,
        <li><Link to="/create" >Create</Link></li>,
        <li> <button class="btn waves-effect waves-light #64b5f6 blue lighten-2" type="submit" name="action"
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