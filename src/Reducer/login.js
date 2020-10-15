import { createStore } from 'redux';
import { UserAction } from "../Action"
const UserInitState = {
    userName: "",
    passWord: ""
}



const loginReducer = (state = UserInitState, action) => {
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

export default loginReducer
