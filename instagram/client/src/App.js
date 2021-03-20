import React, { createContext, useContext, useEffect, useReducer } from 'react';
import Navbar from './components/navbar';
import "./App.css";
import {BrowserRouter, Route, useHistory} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/profile';
import CreatePost from "./components/createPost";
import reducer, { initialState } from './reducer/userReducer';

export const UserContext = createContext()

const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext);
  useEffect(()=>{
 const user = JSON.parse(localStorage.getItem("user"));
if(user){
  dispatch({type:"USER",payload:user})
  //history.push('/');
}
else{
  history.push('/login');
}
  },[])
  return(
    <switch>
    <Route exact path='/'>
    <Home />
    </Route>
    <Route path='/login'>
    <Login />
    </Route>
    <Route path='/signup'>
    <Signup />
    </Route>
    <Route path='/profile'>
    <Profile />
    </Route>
    <Route path='/create'>
    <CreatePost></CreatePost>
    </Route>
    </switch>
  )
}

function App() {
const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <Navbar />
   <Routing></Routing>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
