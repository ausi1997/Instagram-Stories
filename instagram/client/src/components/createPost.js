import React from "react";

const CreatePost = ()=>{
    return(
<div className="card input-field">
<input type="text" placeholder="title"></input>
<input type="text" placeholder="body"></input>
<div className="file-field input-field">
<div className="btn">
  <span>Upload Image</span>
  <input type="file"/>
</div>
<div className="file-path-wrapper">
  <input className="file-path validate" type="text"/>
</div>
</div>
<button class="btn waves-effect waves-light #64b5f6 blue lighten-2" type="submit" name="action">
Create Post
</button>
</div>
    )
}

export default CreatePost;