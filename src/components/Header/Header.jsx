import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../common/Button'
import Logo from './Logo/Logo'
import { selectUserName, setCurrentUser } from '../../store/user/userSlice'
import { HeaderBox } from './style'

export default function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const username = useSelector(selectUserName)
  const { pathname } = useLocation()
  const clickButton = () => {
    window.localStorage.removeItem('token')
    dispatch(setCurrentUser({}))
    navigate('/login', { replace: true })
  }
  function LogoutButton() {
    if (pathname === '/login' || pathname === '/registration') { return <></> }
    return (
      <>
        <span>{username}</span>
        <Button buttonText="Logout" clickEvent={clickButton} />
      </>
    )
  }
  return (
    <HeaderBox id="orange">
      <Logo />
      <LogoutButton />
    </HeaderBox>
  )
}
