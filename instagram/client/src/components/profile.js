import React from 'react';

const Profile = ()=>{
    return(
        <div style={{margin:"auto",maxWidth:"650px"}}>
        <div style={{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"2px solid black"}}>
        <div>
        <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
         src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"></img>
        </div>
        <div><h4>Ausaf Ahmad</h4>
        <div style={{display:"flex",justifyContent:"space-between",width:"115%"}}>
        <h5>20 posts</h5>
        <h5> 200 followers</h5>
        <h5>250 following</h5>
        </div>
        </div>
        </div>
        <div className="gallery">
        <img className="item" src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmVyeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"></img>
        <img className="item" src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmVyeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"></img>
        <img className="item" src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmVyeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"></img>
        <img className="item" src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmVyeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"></img>

        </div>
        </div>
    )
}

export default Profile;