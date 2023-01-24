import React from 'react'
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

function DeleteButton() {

  const {
    isLoggedIn,
    user,
    logOutUser,
  } = useContext(AuthContext);

  return (
    <div>
      <div className="container-delete-btn">
        <div className="div-delete-btn">
          <div className="delete-btn"></div>
                <button className="text-delete-btn" to="/" onClick={logOutUser}>
                  Delete
                </button>
          </div>
        </div>
      </div>
  )
}

export default DeleteButton