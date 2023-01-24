import React from 'react'
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import  { Link }  from "react-router-dom";

function AddEntry() {

  const {
    isLoggedIn,
    user,
    logOutUser,
  } = useContext(AuthContext);

  return (
    <div>
      <div className="container-add-btn">
        <div className="div-add-btn">
            <div className="add-btn"></div>
                <button className="text-add-btn" >
                  <Link className="text-add-btn" to="/create-entry">Add Entry</Link>
                
                </button>
        </div>
      </div>
    </div>
  )
}

export default AddEntry