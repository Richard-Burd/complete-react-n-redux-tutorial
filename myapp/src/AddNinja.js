import React, { Component } from 'react';

class AddNinja extends Component {
  // we need a function that is gonna fire each time one of the input fields below [i.e. "onChange={}"] changes
  // this function must update the state to store what a user types in each one of those input fields.
  // but first, let's create thaty state:
  state = {
    name: null,
    age: null,
    belt: null
  }
  // now let's make the function we described above the state:
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value // we use "id"'s below so we can target each onChange we want
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNinja(this.state);
    console.log(`handleSubmit has fired and returned ${this.state}`);
    console.log(this.state);
    console.log(this.props);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="name">Age:</label>
          <input type="text" id="age" onChange={this.handleChange} />
          <label htmlFor="name">Belt:</label>
          <input type="text" id="belt" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
export default AddNinja
