import React from 'react';
import {Link} from 'react-router-dom'

const Login = ()=>{
    return(
        <div className = "mycard">
        <div className = "card">
        <h2>Instagram</h2>
        <input type="text" placeholder="email"></input>
        <input type="text" placeholder="password"></input>
        <button class="btn waves-effect waves-light #64b5f6 blue lighten-2" type="submit" name="action">
        Login
        </button>
        <p>Do not have account?</p>
        <Link to='/signup'>click here</Link>
        </div>
        </div>
    )
}

export default Login;