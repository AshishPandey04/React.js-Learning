import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("")
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  //useRef hook 
  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "@&%$*/\,-+#!"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, characterAllowed])

  
  const copypasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed,characterAllowed, passwordGenerator])




  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3  text-orange-500 bg-gray-700 mt-20'>
        <h1 className='text-white text-center my-4 text-xl'>Password Generator </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input
           type="text"
           value={password} 
           className='outline-none w-full py-1 px-3'
           placeholder='password'
           readOnly
           ref={passwordRef}
           />
           <button 
           onClick={copypasswordToClipboard}
           className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  outline-none'>
            Copy 
           </button>


        </div>

        <div className='flex text-base gap-x-5 mt-3 mb-4'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
             />
             <label >Length: {length}</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberAllowed} 
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev) => !prev)
            }}
            />
            <label >Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={characterAllowed} 
            id="charInput"
            onChange={()=>{
              setCharacterAllowed((prev) => !prev)
            }}
            />
            <label htmlFor='CharInput' >Characters </label>
            </div>

        </div>


      </div>
   
    </>
  )
}

export default App
