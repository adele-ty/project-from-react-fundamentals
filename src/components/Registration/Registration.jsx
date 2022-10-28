import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { message } from 'antd'
import { Span, Column, RegisterLogin } from '../../common/CommonHTML'
import Button from '../../common/Button'
import Input from '../../common/Input'
import getInfo from '../../helpers/getLoginOrRegisterInfo'

export default function Registration() {
  const navigate = useNavigate()
  let registerInfo = {}
  function inputInfo(e, field) {
    const info = getInfo(registerInfo, e, field)
    registerInfo = { ...info }
  }
  async function submitForm(e) {
    e.preventDefault()
    if (registerInfo.password.length < 6) message.warning('password length should be 6 characters minimum')
    else {
      await axios.post('http://localhost:4000/register', registerInfo)
      navigate('/login', { replace: true })
    }
  }
  return (
    <RegisterLogin id="blue">
      <form onSubmit={submitForm}>
        <Column>
          <Span>Registration</Span>
          <Column>
            <span>Name</span>
            <Input placeholder="Enter name" changeEvent={(e) => inputInfo(e, 'name')}></Input>
          </Column>
          <Column>
            <span>Email</span>
            <Input placeholder="Enter email" changeEvent={(e) => inputInfo(e, 'email')}></Input>
          </Column>
          <Column>
            <span>Password</span>
            <Input type="password" placeholder="Enter password" changeEvent={(e) => inputInfo(e, 'psd')}></Input>
          </Column>
          <Button buttonText="Registration" type="submit"></Button>
          <div>
            <span>If you have account you can </span>
            <Link to="/login">Login</Link>
          </div>
        </Column>
      </form>
    </RegisterLogin>
  )
}
