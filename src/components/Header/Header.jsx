import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../common/Button'
import Logo from './Logo/Logo'
import { currentUserContext } from '../../helpers/context'
import { HeaderBox } from '../../common/CommonHTML'

export default function Header() {
  const { currentUser, setCurrentUser } = useContext(currentUserContext)
  const navigate = useNavigate()
  const { currentPath } = useLocation()
  const clickButton = () => {
    window.localStorage.removeItem('token')
    setCurrentUser({})
    const nextPage = '/login'
    navigate(nextPage, { replace: true })
  }
  function LogoutButton() {
    if (currentPath !== '/login' && currentPath !== '/registration') {
      return (
        <>
          <span>{currentUser.email}</span>
          <Button buttonText="Logout" clickEvent={clickButton} />
        </>
      )
    }
  }
  return (
    <HeaderBox id="orange">
      <Logo />
      <LogoutButton />
    </HeaderBox>
  )
}
