import React from 'react'
import LoginForm from '../components/LoginForm'


function HomePage() {
  return (
  <div className='container-background'>
    <div className='div-intro-texts'>
      <h2 className='title-text'>Living the life you dreamt!</h2>
    </div>
    <div className="container-form">
      <LoginForm />
    </div>
  </div>
  

  )
}

export default HomePage