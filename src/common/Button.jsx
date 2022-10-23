import React from 'react'
import { StyledButton } from './CommonHTML'

export default function Button(props) {
  const { buttonText, clickEvent } = props
  return (
    <StyledButton onClick={clickEvent}>{buttonText}</StyledButton>
  )
}
