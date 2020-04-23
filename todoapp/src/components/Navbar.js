import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="container">
      <nav className="nav-wrapper red darken-3">
        <div className="container">
          <a className="left">Poke'Times</a>
          <ul className="right">
            {/* <li><a href="/">Home</a></li> */}
            {/* <li><a href="/about">About</a></li> */}
            {/* <li><a href="/contact">Contact</a></li> */}
            {/* Now we're gonna use the Link & NavLink from react-router-dom above */}
            {/* This prevents the entire page from reloading and making additional */}
            {/* requests to the server. */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>

            {/* using NavLink add a class="active" to the element in the DOM */}
            {/* This allows you to apply styles & stuff to elements the user */}
            {/* clicked on last in order to make the UI to be more responsive */}
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
