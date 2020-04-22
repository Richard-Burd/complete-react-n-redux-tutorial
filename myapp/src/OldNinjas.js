
// You no longer need the "{ Component }" because this is now a functional component
//import React, { Component } from 'react';                   (refactor level-2)

import React from 'react';
/* we're gonna make this a functional (AKA presentational) component cause it doesn't need state
class Ninjas extends Component {                              (refactor level-2)
// we do that by getting rid of the "class" and making the whole thing an arrow function
// ...now we need to pass in the "props" to this function
*/
//const Ninjas = (props) => {                                 (refactor level-3)
// ... now we can destructure directly inside the fnction brackets:
  const Ninjas = ({ninjas}) => {
// we don't need the "render" in a functional component:
//render() {                                                  (refactor level-2)

    // we can simplify the code with some destructuring:
    //const { name, age, belt } = this.props;                 (refactor level-1)

    // we can do this:
    // const ninjas = this.props.ninjas;
    // ...but we're gonna use destructuring:
    // const { ninjas } = this.props;                         (refactor level-2)
    // we don't say "this.props" because we're not referring to an instance of a class anymore...
    // ...we just reference the props we pass into the Ninjas arrow function as a parameter:
    //const { ninjas } = props;
    // now that we're destructuring directly in the Ninjas function brackets


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
  //} this is for the "render" we no longer need              (refactor level-2)
}

export default Ninjas;
