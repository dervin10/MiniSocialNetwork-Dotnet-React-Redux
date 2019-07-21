import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/layout/_navigation.scss'
import Username from './Username'

const NavMenu = props => (
  <nav>
    <div className="icon-user">
      <Username />
    </div>
    <div className="icon-nav">
      <Link to="/">
        <i className="fas fa-user-friends" />
      </Link>
      <Link to="/">
        <i className="fas fa-home" />
      </Link>
      <Link to="/">
        <i className="fas fa-envelope-open" />
      </Link>
    </div>
    <div className="icon-help">
      <Link to="/">
        <i className="fas fa-question-circle" />
      </Link>
    </div>
  </nav>
)

export default NavMenu;