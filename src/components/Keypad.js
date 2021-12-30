import React from 'react';

function Keypad () {
  function entering (event){
    console.log("Entering password...")
  }
  return <input type="password" onChange={entering}/>
}

export default Keypad;