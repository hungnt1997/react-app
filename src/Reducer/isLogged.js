




const logReducer = ( status = false, action) => { 
    switch( action.type){
        case "SIGN_IN": 
            return !status
        default: {
            return status
        }
    }
}
export default logReducer