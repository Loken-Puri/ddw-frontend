import React from 'react'

function updateProfileForm() {
  return (
    <div>
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
        <label htmlFor="firstName">First Name</label>
        <input onChange = {handleChange}
          type="text"
          id="firstName"
          name="firstName"
          placeholder="enter your first name here"
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input onChange = {handleChange}
          type="text"
          id="lastName"
          name="lastName"
          placeholder="enter your last name here"
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
      <button type="submit">Update your personal info</button>
    </form>

    </div>
  )
}

export default updateProfileForm