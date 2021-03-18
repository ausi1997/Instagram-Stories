import React from 'react';
import Navbar from './components/navbar';
import "./App.css";
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/profile';
import CreatePost from "./components/createPost";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
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
    </BrowserRouter>
  );
}

export default App;
