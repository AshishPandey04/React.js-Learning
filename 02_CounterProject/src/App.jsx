import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(15)

  const increaseCount = () => {
    count = count + 1;
    setCount(count)

  }
  const decreaseCount = () => {
    count--;
    setCount(count)

  }

  return (
    <>
    <div className='p-6 rounded-lg bg-slate-300  my-36 mx-auto w-80 shadow-lg'>
  <h1 className='text-3xl font-bold underline-offset-2 mb-3 text-center'>
    Counter
  </h1>
  <div className='text-2xl mb-4 py-2 px-3 rounded bg-gray-600 text-center'>
    Counter value: {count}
  </div>
  <div className='flex justify-evenly'>
    <button 
      className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600'
      onClick={increaseCount}>
      Increase
    </button>
    <button 
      className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600'
      onClick={decreaseCount}>
      Decrease
    </button>
  </div>
</div>


    </>
  )
}

export default App
