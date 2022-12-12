import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { message } from 'antd'
import { currentUserContext } from '../../helpers/context'
import { RegisterLogin, Column, Span } from '../../common/CommonHTML'
import Input from '../../common/Input'
import Button from '../../common/Button'
import getInfo from '../../helpers/getLoginOrRegisterInfo'

export default function Login() {
  const { setCurrentUser } = useContext(currentUserContext)
  const navigate = useNavigate()
  let loginInfo = {}
  function inputInfo(e, field) {
    const info = getInfo(loginInfo, e, field)
    loginInfo = { ...info }
  }

  async function submitForm(e) {
    e.preventDefault()
    await axios.post('http://localhost:4000/login', loginInfo).then((res) => {
      window.localStorage.setItem('token', res.data.result)
      if (window.localStorage.getItem('token')) {
        setCurrentUser({ ...loginInfo })
        navigate('/courses')
      }
    }).catch(() => {
      const errorMsg = 'Please input email and password correctly!'
      message.error(errorMsg)
      throw Error(errorMsg)
    })
  }

  return (
    <RegisterLogin id="blue">
      <form onSubmit={submitForm}>
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
          <Button buttonText="Login" type="submit"></Button>
          <div>
            <span>If you not have an account you can </span>
            <Link to="/registration">Registration</Link>
          </div>
        </Column>
      </form>
    </RegisterLogin>
  )
}
