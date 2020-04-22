import React from 'react';
import './Ninjas.css'

const Ninjas = ({ninjas, deleteNinja}) => {
  // const ninjaList = ninjas.map(ninja => {
  //   return (
  //     <div className="ninja" key={ninja.id}>
  //       <div>Name: { ninja.name }</div>
  //       <div>Age: { ninja.age }</div>
  //       <div>Belt: { ninja.belt }</div>
  //     </div>
  //   )
  // })
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 20 ? (
      <div className="ninja" key={ninja.id}>
        <div>Name: { ninja.name }</div>
        <div>Age: { ninja.age }</div>
        <div>Belt: { ninja.belt }</div>
        {/* each time we output a ninja, we want to add a delete button */}
        {/* this will not work because it would automatically call the deleteNinja function */}
        {/* because it have curvy brackets to the right of it: "deleteNinja()" */}
        {/* <button onClick={deleteNinja(ninja.id)}>Delete ninja</button> */}
        {/* so the way we solve this is to wrap it in an anonomoyous function */}
        <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
      </div>
    ) : null;
  })
  return(
    <div className="ninja-list">
      { ninjaList }
    </div>
  )
}

export default Ninjas
