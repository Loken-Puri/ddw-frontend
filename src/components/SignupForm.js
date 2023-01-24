import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import DDWText from '../images/DDW-Text.png'
import { Link } from "react-router-dom";
import { BASE_API_URL } from '../utils/constants'

function SignupForm() {

  const [username, setUsername] =  useState(" ")
  const [email, setEmail] =  useState(" ")
  const [password, setPassword] =  useState(" ")  

  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault()
    let newUser = {
      username,
      email,
      password
    }
    let responseAxios = await axios.post(`${BASE_API_URL}/auth/signup`, newUser)
    navigate('/login')
  }
  
  const handleChange = event => {
    console.log (event.target.name)
    if (event.target.name === "username") {
    setUsername(event.target.value)
  } else if (event.target.name === "email") {
    setEmail(event.target.value)
  } else {
    setPassword(event.target.value)
  }
  }

  return (
    <div className="signup-container">
      <div className="wrap-login100">
          <form className="login100-form validate-form" onSubmit={(e) => {handleSubmit(e)}}>
            <div className='logo-container'>
              <img className="logo-text" src={DDWText}
      alt="Don't Die Without logo" />
              <span className="login100-form-title p-b-26">
                Sign Up
              </span>
              <span className="login100-form-title p-b-48">
                <i className="zmdi zmdi-font"></i>
              </span>
            </div>

            <div className="wrap-input100 validate-input">
              <input className="input100"onChange = {handleChange}
          type="text"
          id="username"
          name="username"
          required />
              <span className="focus-input100" data-placeholder="Username"></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
              <input className="input100" onChange = {handleChange}
          type="text"
          id="email"
          name="email"
          required />
              <span className="focus-input100" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Enter password">
              <span className="btn-show-pass">
                <i className="zmdi zmdi-eye"></i>
              </span>
              <input className="input100" onChange = {handleChange}
            type="password"
            id="password"
            name="password"
            required />
              <span className="focus-input100" data-placeholder="Password"></span>
            </div>

            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button className="login100-form-btn" type="submit">
                  Sign Up
                </button>
              </div>
            </div>

            <div className="text-center p-t-115">
              <span className="txt1">
                Already have an account?
              </span>
              <Link className="txt2" to="/"> Login </Link> 
            </div>
          </form>
        </div>

      </div> 
  )
}

export default SignupForm