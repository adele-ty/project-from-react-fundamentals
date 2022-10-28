import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../common/Button'
import Logo from './Logo/Logo'
import { currentUserContext } from '../../helpers/context'
import { HeaderBox } from '../../common/CommonHTML'

export default function Header() {
  const { currentUser, setCurrentUser } = useContext(currentUserContext)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const clickButton = () => {
    window.localStorage.removeItem('token')
    setCurrentUser({})
    navigate('/login', { replace: true })
  }
  function LogoutButton() {
    if (pathname === '/login' || pathname === '/registration') { return <></> }
    return (
      <>
        <span>{currentUser.email}</span>
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
