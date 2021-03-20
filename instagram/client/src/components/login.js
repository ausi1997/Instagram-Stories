import React, { useContext, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import M from 'materialize-css';
import { UserContext } from '../App';
const Login = ()=>{
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const getData = ()=>{
        // checking for valid email using regex expression
        if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            M.toast({html:"Invalid email...",classes:"#e53935 red darken-1"});
            return
        }
        fetch('/user/login',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.error){
                  M.toast({html:data.message,classes:"#e53935 red darken-1"});
                  history.push('/login');
            }
            else{
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                dispatch({type:"USER", payload:data.user})
                M.toast({html:data.message,classes:"#4caf50 green"});
                history.push('/');
            }
        })
    }
    return(
        <div className = "mycard">
        <div className = "card">
        <h2>Instagram</h2>
        <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button class="btn waves-effect waves-light #64b5f6 blue lighten-2" type="submit" name="action" onClick={()=>getData()}>
        Login
        </button>
        <p>Do not have account?</p>
        <Link to='/signup'>click here</Link>
        </div>
        </div>
    )
}

export default Login;