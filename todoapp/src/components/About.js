import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>All about this webpage</p>
    </div>
  )
}

// wrapping this in the Rainbow means the font text will randomly change colors on refresh
export default Rainbow(About)
