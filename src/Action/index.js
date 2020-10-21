
export const UserAction = {
  ChangeUserName: "CHANGE_USERNAME", 
  ChangePassWord:  "CHANGE_PASSWORD"
}

export const changeUserName = (userName = "") => ({
  type: UserAction.ChangeUserName,
  data: userName
})
export const changePassword = (userPassword = "") => ({
  type: UserAction.ChangePassWord,
  data: userPassword
})

export const logginSucess  =  ({
  type: "LOGGIN_SUCESS"
})