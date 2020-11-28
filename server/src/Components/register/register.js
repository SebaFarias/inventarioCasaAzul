import React from 'react'
import { connect } from 'react-redux'

const Register = () => {
  return(
    <h3>Register</h3>
  )
}

const registerComponent = connect()(Register)
export {registerComponent as Register}