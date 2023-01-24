import React from 'react'
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_API_URL } from '../utils/constants'


function DeleteExpButton() {

  const {
    token
  } = useContext(AuthContext);

    let params = useParams()
    const searchId = params.Id
    const navigate = useNavigate();

    const handleDelete = async event => {
    let responseAxios = await axios.delete(`${BASE_API_URL}/experiences/delete-entry/${searchId}`, { headers: { Authorization: `Bearer ${token}`} })
    navigate("/profile");
    };

  return (
    <div>
      <div className="container-delete-btn">
        <div className="div-delete-btn">
          <div className="delete-btn"></div>
                <button className="text-delete-btn" to="/" onClick={handleDelete}>
                  Delete
                </button>
          </div>
        </div>
      </div>
  )
}

export default DeleteExpButton