import api from "./api";

const getProfile =()=>{
  return api.get("profile/");
}
 
const UserService = {
 getProfile,
};
 
export default UserService;
