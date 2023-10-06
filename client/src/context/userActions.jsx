// userActions.js
export const loginStart = (dispatch) => {
    dispatch({ type: 'LOGIN_START' });
  };
  
  export const loginSuccess = (dispatch, user) => {
    dispatch({ type: 'LOGIN_SUCCESS', payload: user });
  };
  
  export const loginFailure = (dispatch, error) => {
    dispatch({ type: 'LOGIN_FAILURE', payload: error });
  };
  