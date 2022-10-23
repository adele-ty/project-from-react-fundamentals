import React from 'react'
import Button from '../../common/Button'
import Logo from './Logo/Logo'
import { HeaderBox } from '../../common/CommonHTML'

export default function Header() {
  const username = 'Sita Tan'
  const clickButton = () => {

  }
  return (
    <HeaderBox id="orange">
      <Logo />
      <span>{username}</span>
      <Button buttonText="Logout" clickEvent={clickButton} />
    </HeaderBox>
  )
}
