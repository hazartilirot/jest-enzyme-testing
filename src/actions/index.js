import axios from 'axios'
import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

/* actionCreator => action => dispatch */
export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}
export function fetchComments() {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments')
  return {
    type: FETCH_COMMENTS,
    payload: response
  }
}