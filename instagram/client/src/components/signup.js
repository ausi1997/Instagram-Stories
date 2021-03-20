import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'
const Signup = ()=>{
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const sendData = ()=>{
        // checking for valid email using regex expression
        if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            M.toast({html:"Invalid email...",classes:"#e53935 red darken-1"});
            return
        }
        fetch('/user/signup',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                firstName,
                lastName,
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.error){
                  M.toast({html:data.message,classes:"#e53935 red darken-1"});
            }
            else{
                M.toast({html:data.message,classes:"#4caf50 green"});
                history.push('/login');
            }
        })
    }
    return(
        <div className = "mycard">
        <div className = "card">
        <h2>Instagram</h2>
        <input type="text" placeholder="firstname" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
        <input type="text" placeholder="lastname" value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
        <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button class="btn waves-effect waves-light #64b5f6 blue lighten-2" type="submit" name="action" onClick={()=>sendData()}>
        Signup
        </button>
        <p>Already an account?</p>
        <Link to='/login'>click here</Link>
        
        </div>
        </div>
    )
}

export default Signup;