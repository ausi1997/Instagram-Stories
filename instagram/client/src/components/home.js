import React from 'react';

const Home = ()=>{
    return(
        <div className="home">
        <div className="home-card">
        <h5>Ausaf</h5>
        <div className="card-image">
        <img src="https://images.unsplash.com/photo-1542300058-b94b8ab7411b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8&auto=format&fit=crop&w=600&q=60"></img>
        </div>
        <div className="card-content">
        <i class="material-icons" style={{color:"red"}}>favorite</i>
        <h6>title</h6>
        <p>This is a image</p>
        <input type="text" placeholder="add a comment..."></input>
        </div>
        </div>
        <div className="home-card">
        <h5>Ausaf</h5>
        <div className="card-image">
        <img src="https://images.unsplash.com/photo-1479502806991-251c94be6b15?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8&auto=format&fit=crop&w=600&q=60"></img>
        </div>
        <div className="card-content">
        <i class="material-icons" style={{color:"red"}}>favorite</i>
        <h6>title</h6>
        <p>This is a image</p>
        <input type="text" placeholder="add a comment..."></input>
        </div>
        </div>
        <div className="home-card">
        <h5>Ausaf</h5>
        <div className="card-image">
        <img src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8&auto=format&fit=crop&w=600&q=60"></img>
        </div>
        <div className="card-content">
        <i class="material-icons" style={{color:"red"}}>favorite</i>
        <h6>title</h6>
        <p>This is a image</p>
        <input type="text" placeholder="add a comment..."></input>
        </div>
        </div>
        </div>
    )
}

export default Home;