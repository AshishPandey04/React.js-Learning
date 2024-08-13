import { useState } from 'react'


import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username:"Ashish",
    age:10,
  }
  let newArr=[1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card username="Ashish " btnText="Click me" />
    <Card username="kiki" />
   
    </>
  )
}

export default App
