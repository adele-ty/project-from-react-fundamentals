import React from 'react'
import { StyledInput } from './CommonHTML'

export default function Input(props) {
  const { placeholder, changeEvent } = props
  return (
    <StyledInput placeholder={placeholder} onChange={changeEvent}></StyledInput>
  )
}
