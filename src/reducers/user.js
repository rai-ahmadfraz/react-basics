const userReducer = (state=0,action) =>{
     switch(action.type){
        case 'addUser':
            return state =  action.payload;
        default:
            return state;    

     }
}
export default userReducer;