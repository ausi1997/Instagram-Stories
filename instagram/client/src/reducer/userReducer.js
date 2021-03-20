export const initialState = null
const reducer = (state,action)=>{
    if(action.type=="USER"){
        return action.payload
    }
    else if(action.type=="CLEAR"){
        return null
    }
    else{
        return state;
    }
}
export default reducer;