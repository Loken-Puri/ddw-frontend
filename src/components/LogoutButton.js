import React from 'react'
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

function LogoutButton() {

  const {
    isLoggedIn,
    user,
    logOutUser,
  } = useContext(AuthContext);

  return (
    <div>
      <div className="container-logout-btn">
        <div className="div-logout-btn">
            <div className="logout-btn"></div>
                <button className="text-logout-btn" to="/" onClick={logOutUser}>
                  Logout
                </button>
        </div>
      </div>
    </div>
  )
}

export default LogoutButton