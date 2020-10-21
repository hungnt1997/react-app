import { UserAction } from "../Action"
const UserInitState = {
    userName: "",
    passWord: ""
}
const LoginInitState = {
    isLoggin: false
}

export const loginReducer = (state = UserInitState, action) => {
    switch (action.type) {
        case UserAction.ChangeUserName:
            return {
                ...state,
                userName: action.data
            }
        case UserAction.ChangePassWord:
            return {
                ...state,
                passWord: action.data
            }
        default:
            return state;
    }
}
export const logginStatusReducer = ( state = LoginInitState, action ) =>{
    switch( action.type){
        case "LOGGIN_SUCESS": {
            return {  isLoggin: true}
        }
        default:
            return state 
    }
}


