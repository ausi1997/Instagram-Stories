import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import M from 'materialize-css'
const Signup = ()=>{
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const sendData = ()=>{
        fetch('/user/signup',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                firstName:'',
                lastName:'',
                email:'',
                password:''
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.err){
                  M.toast({html:data.err});
            }
        })
    }
    return(
        <div className = "mycard">
        <div className = "card">
        <h2>Instagram</h2>
        <input type="text" placeholder="firstname" value={firstName} onChange={(e)=>setfirstName(e.target.value)}></input>
        <input type="text" placeholder="lastname" value={lastName} onChange={(e)=>setlastName(e.target.value)}></input>
        <input type="text" placeholder="email" value={email} onChange={(e)=>setemail(e.target.value)}></input>
        <input type="text" placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)}></input>
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