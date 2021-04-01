import React, { useContext } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { UserContext } from '../App';

const Navbar = ()=>{
  const history = useHistory();
  const{state,dispatch} = useContext(UserContext);
  const render = ()=>{
    if(state){
      return[
        <li key="1"><i className="material-icons" style={{color:"black"}}>search</i></li>,
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