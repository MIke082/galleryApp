import * as actionTypes from "../actionTypes"

export function addPost(post) {
    const action = {
        type: actionTypes.ADD_NEW_POST,
        post,
    }
    return simulateHttpRequest(action)
}

export function addComment(comment) {
    const action = {
        type: actionTypes.ADD_NEW_COMMETN,
        comment,
    }
    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action) {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(action)
      }, 500)
    }
  }