import React from 'react'
import { StyledInput } from './CommonHTML'

export default function Input(props) {
  const { placeholder, changeEvent, type } = props
  return (
    <StyledInput type={type} placeholder={placeholder} onChange={changeEvent}></StyledInput>
  )
}
