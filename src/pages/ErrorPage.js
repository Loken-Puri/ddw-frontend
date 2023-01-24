import React from 'react'
import ErrorImage from '../images/error_404.png'

function ErrorPage() {
  return (
    
    <div><img className="error-message" src={ErrorImage}
    alt="404 error message" />
    </div>
  )
}

export default ErrorPage