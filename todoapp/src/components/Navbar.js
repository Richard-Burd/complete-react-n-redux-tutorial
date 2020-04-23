import React from 'react'

// now we're going to add a higher order component called "withRouter"
// a higher order component is s.thing that wraps another component
// and gives it extra capabilities.  In this case we're gonna apply some extra
// capability to the "props" in the setTimeout() function below
// import { Link, NavLink } from 'react-router-dom'
import { Link, NavLink, withRouter } from 'react-router-dom'

// we need to pass in props as a parameter to do the progarammatic redirect below
const Navbar = (/*props*/) => {
  //console.log(props)
  //// this programmatic redirect is similiar to the one in Contact.js
  //setTimeout(() => {
  //  props.history.push('/about')
  //}, 4000 )

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

// we need to wrap this with a higher order component so it can wrap the props
export default withRouter(Navbar)
