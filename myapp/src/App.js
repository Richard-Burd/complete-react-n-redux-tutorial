import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas : [
      {name: 'Ryu', age: 30, belt: 'black', id: 1 },
      {name: 'Yoshi', age: 20, belt: 'black', id: 2 },
      {name: 'Sakura  ', age: 40, belt: 'black', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
