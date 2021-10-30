import api from "./api";


const login = (username, password) => {
  return api
    .post("authenticate/", {
      username,
      password
    })
};
const logout = () => {
  return api
    .post("logout/")
};


const AuthService = {
  login,
  logout
  
};

export default AuthService;
