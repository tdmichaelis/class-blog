import { combineReducers } from 'redux'

function postsReducer(posts = [], action) {
  if (action.type === 'FETCH_POSTS') {
    return action.payload
  }
  return posts
}
function userReducer(users = [], action) {
  if (action.type === 'SET_USERS') {
    return action.payload
  }
  return users
}

export default combineReducers({
  posts: postsReducer,
  users: userReducer
})