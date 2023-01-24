import React from 'react'
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

function ProfileDetailsButton() {

  const {
    isLoggedIn,
    user,
    logOutUser,
  } = useContext(AuthContext);

  return (
    <div>
      <div className="container-details-btn">
        <div className="div-details-btn">
            <div className="details-btn"></div>
                <button className="text-details-btn" to="/entry-details">
                  Details
                </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetailsButton