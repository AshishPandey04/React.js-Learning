import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className=' text-white text-3xl bg-blue-700 text-center py-1 my-4'>Currency Converter</h1>
    </>
  )
}

export default App
