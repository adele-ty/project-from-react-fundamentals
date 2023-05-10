import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { StyledInput } from './CommonHTML'

const Input = forwardRef((props, ref) => {
  const {
    placeholder, changeEvent, type
  } = props
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      onChange={changeEvent}
      ref={ref}
    >
    </StyledInput>
  )
})

Input.defaultProps = {
  placeholder: 'Please enter something'
}

Input.propTypes = {
  placeholder: PropTypes.string,
  changeEvent: PropTypes.func,
  type: PropTypes.string
}

export default Input
