import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas : [
      {name: 'Ryu', age: 30, belt: 'black', id: 1 },
      {name: 'Yoshi', age: 20, belt: 'black', id: 2 }, // this one's not rendering cuz he's too young
      {name: 'Sakura', age: 40, belt: 'black', id: 3 }
    ]
  }

  // we need a function that will add the new ninja to the state above
  addNinja = (ninja) => {
    //console.log(this.state)
    // console.log(ninja)
    // This is a better way to assign an ID number than Math.random()
    ninja.id = this.state.ninjas[this.state.ninjas.length - 1].id + 1;

    // we need a copy of the existing state array
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }

  // we're gonna use the 'id' to find the ninja we want to remove
  deleteNinja = (id) => {
    console.log(`the ninja with id:${id} is being deleted`)
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id // if it's not the ninja we're looking for, keep it in the array.
    });
    this.setState({
      ninjas: ninjas
    })
  }

  // Here are some examples of lifecycle methods:
  componentDidMount(){
    console.log("component mounted")
  }

  // This one fires when we get a change in state or props
  componentDidUpdate(prevProps, prevState){
    console.log("component updated");
    console.log(prevProps, prevState)
  }

  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome :)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
