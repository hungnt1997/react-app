let nextTodoId = 0

export const UserAction = {
  ChangeUserName: "CHANGE_USERNAME", 
  ChangePassWord:  "CHANGE_PASSWORD"
}


export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
export const Increment = { 
  type: 'INCREMENT'
}
export const Decrement = {
  type: 'DECREMENT'
}




export const changeUserName = (userName = "") => ({
  type: UserAction.ChangeUserName,
  data: userName
})
export const changePassword = (userPassword = "") => ({
  type: UserAction.ChangePassWord,
  data: userPassword
})