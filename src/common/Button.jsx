import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './CommonHTML'

function Button(props) {
  const { buttonText, clickEvent } = props
  return (
    <StyledButton onClick={clickEvent}>{buttonText}</StyledButton>
  )
}

Button.propTypes = {
  buttonText: PropTypes.string,
  clickEvent: PropTypes.func
}

export default Button
