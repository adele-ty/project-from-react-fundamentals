import React from 'react'
import PropTypes from 'prop-types'
import { StyledInput } from './CommonHTML'

function Input(props) {
  const { placeholder, changeEvent, type } = props
  return (
    <StyledInput type={type} placeholder={placeholder} onChange={changeEvent}></StyledInput>
  )
}

Input.defaultProps = {
  placeholder: 'Please enter something'
}

Input.propTypes = {
  placeholder: PropTypes.string,
  changeEvent: PropTypes.func,
  type: PropTypes.string
}

export default Input
