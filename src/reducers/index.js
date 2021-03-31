import { combineReducers } from "redux";
import commentsReducer from 'reducers/comments'

/* reducer => combineReducers => state */
export default combineReducers({
  comments: commentsReducer
})