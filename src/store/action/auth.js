export const LOG_IN = "LOG_IN";
export const SIGN_UP = "SIGN_UP";
export const LOG_OUT = "LOG_OUT";

export const logIn = (email, password) => {
  return {
    type: LOG_IN,
    userData: { userID: email, pass: password },
  };
};

export const signUp = (email, password) => {
  return {
    type: SIGN_UP,
    userData: { userID: email, pass: password },
  };
};

export const logOut = () => {
  return { type: LOG_OUT };
};
