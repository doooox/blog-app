import React from 'react'
import { Link } from 'react-router-dom'
import Routes from '../Routes'

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
        </ul>
      </nav>
      <Routes />
    </div>
  )
}

export default Layout