export const initialState = null
const reducer = (state,action)=>{
    if(action.type=="USER"){
        return action.payload
    }
    else if(action.type=="CLEAR"){
        return null
    }
    else if(action.type=="UPDATE"){
        return{
            ...state,
            followers:action.payload.followers,
            followings:action.payload.followings
        }
    }
    else if (action.type=="UPDATEPIC"){
        return{
          ...state,   
            profilePic:action.payload
        }
    }
    else{
        return state;
    }
}
export default reducer;