import React from 'react'
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

function UpdateProfileButton() {

  const {
    isLoggedIn,
    user,
    logOutUser,
  } = useContext(AuthContext);

  return (
    <div>
      <div className="container-update-btn">
        <div className="div-update-btn">
            <div className="update-btn"></div>
                <button className="text-update-btn" to="/" onClick={logOutUser}>
                  Update
                </button>
        </div>
      </div>
    </div>
  )
}

export default UpdateProfileButton