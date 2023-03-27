import React from 'react'
import Form from '../components/Form'
import RegisterForm from '../features/RegisterForm'

type Props = {}

function register({}: Props) {
  return (
    <>
    {/* <div className="hero is-fullheight"></div> */}
    <div className="bg hero-body ">
        <RegisterForm />
    </div>
    </>
  )
}

export default register