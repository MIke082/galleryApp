import * as actionTypes from "../actionTypes"

export function addComment(comment) {
  // console.log(comment, 'commentAct');
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