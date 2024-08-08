const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      console.log("Login action dispatched", action.payload); // Debug log

      return {
        currentUser: action.payload,
      };
    }
    case "LOGOUT": {
      console.log("Logout action dispatched"); // Debug log

      return {
        currentUser: null,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
