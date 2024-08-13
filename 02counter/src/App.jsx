import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 15;
  let [counter,setCounter]=useState(15)

  const addvalue=()=>{

    // counter = counter+1;
    // console.log(counter);
    if (counter<20) {
      setCounter(counter+1)
    }
  }

  const removevalue=()=>{
    // counter = counter -1;
    // console.log(counter);
    if(counter>0){
      setCounter(counter -1)

    }

  }
 

  return (
    <>
      <h1>Chai aur code </h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addvalue}>Increase Value</button> 
      <button onClick={removevalue}>Decrease Value</button>
    </>
  )
}

export default App
