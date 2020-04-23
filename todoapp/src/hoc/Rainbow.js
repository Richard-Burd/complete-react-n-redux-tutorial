import React from 'react'

// This higher order component will wrapp another component and change the colors
// of all the fonts in that component in a random, colorful way.
const Rainbow = (WrappedComponent) => {

  const colours = ["red", "pink", "orange", "blue", "green", "yellow"];
  const randomColour = colours[Math.floor(Math.random() * 5)];
  const className = randomColour + '-text'

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default Rainbow
