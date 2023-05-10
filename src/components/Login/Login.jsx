import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { message } from 'antd'
import { RegisterLogin, Column, Span } from '../../common/CommonHTML'
import Input from '../../common/Input'
import Button from '../../common/Button'
import getInfo from '../../helpers/getLoginOrRegisterInfo'
import { getCourses } from '../../store/courses/courseSlice'
import { getAuthors } from '../../store/authors/authorSlice'
import { setCurrentUser } from '../../store/user/userSlice'
import {
  getCourseList, getAuthorsList, userLogin, getMe
} from '../../api'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let loginInfo = {}
  function inputInfo(e, field) {
    const info = getInfo(loginInfo, e, field)
    loginInfo = { ...info }
  }
  const setCoursesAndAuthors = async () => {
    const courses = await getCourseList()
    dispatch(getCourses(courses.result))
    const authors = await getAuthorsList()
    dispatch(getAuthors(authors.result))
  }
  const submitForm = async (e) => {
    e.preventDefault()
    const res = await userLogin(loginInfo)
    if (res.successful) {
      window.localStorage.setItem('token', res.result)
      const token = window.localStorage.getItem('token')
      if (token) {
        const res = await getMe()
        dispatch(setCurrentUser({
          ...loginInfo, token, name: res.name, role: res.role
        }))
      }
      setCoursesAndAuthors()
      navigate('/courses')
    } else {
      message.error('Please input email and password correctly!')
    }
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
