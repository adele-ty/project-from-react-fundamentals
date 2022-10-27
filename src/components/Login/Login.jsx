import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { currentUserContext } from '../../helpers/context'
import { RegisterLogin, Column, Span } from '../../common/CommonHTML'
import Input from '../../common/Input'
import Button from '../../common/Button'

export default function Login() {
  const { currentUser, setCurrentUser } = useContext(currentUserContext)
  const navigate = useNavigate()
  let loginInfo = {}
  function inputInfo(e, field) {
    switch (field) {
    case 'name':
      loginInfo = { ...loginInfo, name: e.target.value }
      break
    case 'email':
      loginInfo = { ...loginInfo, email: e.target.value }
      break
    case 'psd':
      loginInfo = { ...loginInfo, password: e.target.value }
      break
    default:
      break
    }
  }

  async function submitForm(e) {
    const { data: res } = await axios.post('http://localhost:4000/login', loginInfo)
    window.localStorage.setItem('token', res.result)
    if (window.localStorage.getItem('token')) {
      setCurrentUser({ ...loginInfo })
      console.log(loginInfo)
      console.log(currentUser)
      e.preventDefault()
      navigate('/courses', { replace: true })
    }
  }

  return (
    <RegisterLogin id="blue">
      {/* <form onSubmit={submitForm}> */}
      <Column>
        <Span>Login</Span>
        <Column>
          <span>Email</span>
          <Input placeholder="Enter email" changeEvent={(e) => inputInfo(e, 'email')}></Input>
        </Column>
        <Column>
          <span>Password</span>
          <Input type="password" placeholder="Enter password" changeEvent={(e) => inputInfo(e, 'psd')}></Input>
        </Column>
        <Button buttonText="Login" type="submit" clickEvent={submitForm}></Button>
        <div>
          <span>If you not have an account you can </span>
          <Link to="/registration">Registration</Link>
        </div>
      </Column>
      {/* </form> */}
    </RegisterLogin>
  )
}
