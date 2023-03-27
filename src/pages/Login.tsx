import React from 'react'
import Form from '../components/Form'
import LoginForm from '../features/LoginForm'

type Props = {}

function login({}: Props) {
  return (
    <div className="container">
        <LoginForm />
    </div>
  )
}

export default login