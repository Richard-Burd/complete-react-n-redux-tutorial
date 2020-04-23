import React from 'react'

// If we take in the props as a parameter, we have router information that the
// router loads up.
const Contact = (props) => {
  // The browser console log will have extra information in the props such as
  // history, location, & match
  // console.log(props)

{/*
  // now let's do a 2 second programmatic redirect where you go to the contact page
  // and 2 seconds (2000 miliseconds) later, you get redirected to the about page
  setTimeout(() => {
    props.history.push('/about')
  }, 2000);
*/}

  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>Here are all the contacts relevant to this web page</p>
    </div>
  )
}

export default Contact
