import React from 'react'
import DDWText from '../images/DDW-Text.png'
// import SignupForm from '../components/SignupForm'

function TestFormPage() {
  return (
  <div >
    {/* <SignupForm /> */}
    {/* <div className="limiter"> 
      <div className="container-login100"> */}
        <div className="wrap-login100">
          <form className="login100-form validate-form">
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
              <input className="input100" type="text" name="username" />
              <span className="focus-input100" data-placeholder="Username"></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
              <input className="input100" type="text" name="email" />
              <span className="focus-input100" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Enter password">
              <span className="btn-show-pass">
                <i className="zmdi zmdi-eye"></i>
              </span>
              <input className="input100" type="password" name="pass" />
              <span className="focus-input100" data-placeholder="Password"></span>
            </div>

            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button className="login100-form-btn">
                  Sign Up
                </button>
              </div>
            </div>

            <div className="text-center p-t-115">
              <span className="txt1">
                Already have an account?
              </span>

              <a className="txt2" href="http://localhost:3000/login">
                Login
              </a>
            </div>
          </form>
        </div>
      {/*</div>
    </div>*/}
  </div>
  )
}

export default TestFormPage