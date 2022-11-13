import React from 'react'
import { Link } from 'react-router-dom'
import Routes from '../Routes'
import "../styles/Layout.css"

const Layout = () => {
  return (
    <div>
      <nav>
        <ul className='navbar'>
          <li>
            <Link to='/posts' className='navbar-link'>Posts</Link>
          </li>
          <li>
            <Link to='/add' className='navbar-link'>Add post</Link>
          </li>
        </ul>
      </nav>
      <Routes />
    </div>
  )
}

export default Layout