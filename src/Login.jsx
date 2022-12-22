import React from 'react'
import LoginCSS from './Login.css'

function Login() {
  return (
    <div class="form-container">
      <h1> Please Login</h1>
      <form>
        <div class="form-control">
          <input type="text" required />
          <label> Email</label>
        </div>

        <div class="form-control">
          <input type="password" required />
          <label> Password</label>
        </div>
        <button class="login-btn">Login</button>
        <p class="text">Don't have an account? <a href="register.html"> Register</a></p>
      </form>
    </div>
  
  )
}

export default Login