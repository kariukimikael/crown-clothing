import React from 'react'
import './RegisterLogin.scss'
import Login from '../../components/login/Login'
import Register from '../../components/register/Register'

const RegisterLogin = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Login />
      <Register />
    </div>
  )
}

export default RegisterLogin
