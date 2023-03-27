import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

type Props = {}

function Layout({}: Props) {
  return (
    <div className="has-background-primary-dark">
        <Navbar />
        <main className="hero is-fullheight-with-navbar">
            <Outlet />
        </main>
    </div>
  )
}

export default Layout