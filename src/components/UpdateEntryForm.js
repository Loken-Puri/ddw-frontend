import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import DDWText from '../images/DDW-Text.png'
import { BASE_API_URL } from '../utils/constants'
import { useParams } from "react-router-dom";

function UpdateEntryForm() {
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [picture, setPicture] = useState(" ");
  const {token, experiences} = useContext(AuthContext)
  console.log("experiences: ",  experiences)
  const navigate = useNavigate();

  let params = useParams()
  
  useEffect(() =>{
    asyncFunction()
  }, []) 

  const asyncFunction = async () => {
    let findExperience = await axios.get(`${BASE_API_URL}/experiences/update-entry/${params.Id}`, { headers: { Authorization: `Bearer ${token}`} }) 
    setTitle(findExperience.data.title)
    setDescription(findExperience.data.description)
    setPicture(findExperience.data.picture)
    //console.log("findExperience: ", findExperience)
  }

  const handleSubmit = async event => {
    event.preventDefault();
    let newExperience = {
      title,
      description,
      picture
    };
    //console.log("new experience: ", newExperience)
    
    let responseAxios = await axios.put(`${BASE_API_URL}/experiences/update-entry/${params.Id}`, newExperience, { headers: { Authorization: `Bearer ${token}`} })
    navigate("/profile");
  };
  

  const handleChange = (event) => {
    console.log(event.target.name);
    if (event.target.name === "title") {
      setTitle(event.target.value);
      console.log(event.target.value)
    } else if (event.target.name === "description") {
      setDescription(event.target.value);
    } else {
      setPicture(event.target.value);
    }
  };

  return (
    <div className="create-entry-container">
      <div className="wrap-login100">
          <form className="login100-form validate-form" onSubmit={(e) => {
          handleSubmit(e);}}>
            <div className='logo-container'>
              <img className="logo-text" src={DDWText}
      alt="Don't Die Without logo" />
              <span className="login100-form-title p-b-26">
                Update Experience
              </span>
              <span className="login100-form-title p-b-48">
                <i className="zmdi zmdi-font"></i>
              </span>
            </div>

            <div className="wrap-input100 validate-input">
              <input className="input100" onChange={handleChange}
            type="text"
            name="title"
            value={title}
            required/>
              <span className="focus-input100" data-placeholder="Title"></span>
            </div>

            <div className="wrap-input100 validate-input">
              <input className="input100" onChange={handleChange}
            type="text"
            name="description"
            value={description}
            required/>
              <span className="focus-input100" data-placeholder="Description"></span>
            </div>

            <div className="wrap-input100 validate-input">
              <input className="input100" onChange={handleChange}
            type="text"
            name="picture"
            value={picture}
            required/>
              <span className="focus-input100" data-placeholder="Picture"></span>
            </div>

            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button className="login100-form-btn" type="submit">
                  Update Experience
                </button>
              </div>
            </div>
          </form>
        </div>
      </div> 
  );
}
export default UpdateEntryForm;