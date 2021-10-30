import React from "react";
import UserService from "../../services/user.service";
import AuthService from "../../services/auth.service";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [user, setUser] = useState([])
  const [loadingUser, setLoadingUser]= useState(false)

  useEffect(() => {
    UserService.getProfile().then(
      (response) => {
        setUser(response.data)
        setLoadingUser(true)
      }); 
  }, []);
  
  const logOut = () => {

    AuthService.logout().then(
        () => {
        window.location.href="http://localhost:8000/login/"
        }
    )}

  return (
    <div className="container">
         
        {loadingUser ? (  
        <>
        <header className="jumbotron">
        <h3>
          <strong>{user[0].name}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Id:</strong> {user[0].cid}
      </p>
      <p>
        <strong>City:</strong> {user[0].city}
      </p>
      </>):(<p>loadingUser</p>)}
        <button className="nav-link" onClick={logOut}>
                    LogOut
        </button>
    </div>
  );
};

export default Dashboard;
