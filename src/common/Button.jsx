import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './CommonHTML'

function Button(props) {
  const {
    buttonText, clickEvent, id, children
  } = props
  const content = id === 'smallBtn' ? children : buttonText
  return (
    <StyledButton id={id} onClick={clickEvent}>{content}</StyledButton>
  )
}

Button.propTypes = {
  buttonText: PropTypes.string,
  clickEvent: PropTypes.func
}

export default Button
