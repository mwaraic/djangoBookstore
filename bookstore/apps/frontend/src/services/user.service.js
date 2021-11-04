import api from "./api";

const getProfile =()=>{
  return api.get("profile/");
}
const getResume=()=>{
  return api.get("resume/");
}
const saveResume=(resume, id)=>{
  return api.put(`resume/${id}`, 
  {resume});
}
const getOpenResume=(name)=>{
  return api.get(`open/${name}`);
}
const UserService = {
 getProfile,
 getResume,
 saveResume,
 getOpenResume
};


export default UserService;
