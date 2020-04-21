import React, { Component } from 'react';

class Ninjas extends Component {
  render() {
    // we can simplify the code with some destructuring:
    //const { name, age, belt } = this.props;              (refactor level-1)

    // we can do this:
    // const ninjas = this.props.ninjas;
    // ...but we're gonna use destructuring:
    const { ninjas } = this.props;

    // Ok, so now we need to take the array of ninjas in the state in App.js...
    // and turn them into an array of HTML elements using the JavaScript map method
    const ninjaList = ninjas.map(ninja => {
      return (
        <div className="ninja" key={ninja.id}>
          <div>Name: { ninja.name }</div>
          <div>Age: { ninja.age }</div>
          <div>Belt: { ninja.belt }</div>
        </div>
      )
    })

    return (
      <div className="ninja-list">
        {/* <div>Name: { name }</div>                      (refactor level-1)*/}
        {/* <div>Age: { age }</div>                        (refactor level-1)*/}
        {/* <div>Belt: { belt }</div>                      (refactor level-1)*/}

        {/* Ok, so now we need to take the array of ninjas in the state in App.js... */}
        {/* and turn them into an array of HTML elements using the JavaScript map method */}

        { ninjaList }
      </div>
    );
  }
}

export default Ninjas;
