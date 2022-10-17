import { LOG_IN, SIGN_UP, LOG_OUT } from "../action/auth";

const initialState = {
  userID: null,
  isAuth: false,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case LOG_IN:
    case SIGN_UP:
      const uId = actions.userData.userID;
      return {
        ...state,
        userID: uId,
        isAuth: true,
      };
    case LOG_OUT:
      return initialState;
    default:
      return initialState;
  }
};
