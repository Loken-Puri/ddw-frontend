import React from 'react'
// import axios from 'axios'
// import {useState} from 'react'
// import { useNavigate } from "react-router-dom";
import SignupForm from '../components/SignupForm'

function SignUpPage() {
  // const [username, setUsername] =  useState(" ")
  // const [email, setEmail] =  useState(" ")
  // const [password, setPassword] =  useState(" ")  

  // const navigate = useNavigate();

  // const handleSubmit = async event => {
  //   event.preventDefault()
  //   let newUser = {
  //     username,
  //     email,
  //     password
  //   }
  //   let responseAxios = await axios.post("http://localhost:5005/auth/signup", newUser)
  //   navigate('/login')
    
  // }
  
  // const handleChange = event => {
  //   console.log (event.target.name)
  //   if (event.target.name === "username") {
  //   setUsername(event.target.value)
  // } else if (event.target.name === "email") {
  //   setEmail(event.target.value)
  // } else {
  //   setPassword(event.target.value)
  // }
  // }
  
  return (
    <div className='signup-page-div'>
      {/* <h1 className='page-title'>Don't Die Without... HomePage</h1>
      <h2>signup form</h2>
      <form className ="form" onSubmit={(e) => {handleSubmit(e)}}>
        <div>
          <label htmlFor="username">Username</label>
          <input onChange = {handleChange}
          type="text"
          id="username"
          name="username"
          placeholder="Butz8er"
          required
        />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input onChange = {handleChange}
          type="text"
          id="email"
          name="email"
          placeholder="seymour_butz@bucketlist.com"
          required
        />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input onChange = {handleChange}
            type="password"
            id="password"
            name="password"
            placeholder="********"
            required
          />
        </div>
        <button type="submit">Become a Member</button>
      </form>   */}
      <div className='signup-form-div'>
        <SignupForm />
      </div>
    </div>
  )

  
}
export default SignUpPage