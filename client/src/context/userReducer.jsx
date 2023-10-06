const userReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN_START':
        return {
          ...state,
          user: null,
          isFetching: true,
          error: false,
        };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: action.payload,
          isFetching: false,
          error: false,
          loggedIn: true,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          user: null,
          isFetching: false,
          error: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          loggedIn: false,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  