import React from 'react'
import NavItem from './NavItem'

type Props = {}

function Navbar({}: Props) {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item has-text-light is-size-4" href="https://bulma.io">
      BuilderBuddy
    </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <NavItem to="/" text="home" />
      <NavItem to="/builds" text="builds" />
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar