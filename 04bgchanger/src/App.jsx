import{useState} from 'react'
import Button from './components/button'

function App() {
  const [color, setColor]=useState("white")

 


 

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center top-4 inset-x-0 px-2 '>
        <div className='bg-white rounded-3xl flex flex-wrap justify-center gap-3 shadow-xl  px-3 py-2'> 
          {/* <button 
          onClick={()=> setColor("red")}
          className='outline-none px-4  py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "red" }}
          >Red</button> */}

          <Button colorName="Red" onClick={()=> setColor("Red")}/>
          <Button colorName="Green" onClick={()=> setColor("Green")}/>
          {/* <button 
          onClick={()=>setColor("green")}
          className='outline-none px-4  py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "green" }}
          >Green</button> */}
          <button 
          onClick={()=>setColor("blue")}
          className='outline-none px-4  py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "blue" }}
          >Blue</button>
          <button 
          onClick={()=>setColor("black")}
          className='outline-none px-4  py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "black" }}
          >Black</button>
          <button 
          onClick={()=>setColor("purple")}
          className='outline-none px-4  py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "purple" }}
          >Purple</button>
          <button 
          onClick={()=>setColor("yellow")}
          className='outline-none px-4  py-1 rounded-full text-black shadow-lg '
          style={{backgroundColor: "yellow" }}
          >Yellow</button>
          <button 
          onClick={()=>setColor("Pink")}
          className='outline-none px-4  py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor: "Pink" }}
          >Pink</button>
          {/* <button 
          onClick={()=>setColor("Lavender")}
          className='outline-none px-4  py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor: "Lavender" }}
          >Lavender </button> */}
          <Button colorName="Lavender" textColor="Black" onClick={()=>setColor("Lavender")}/>
          <button 
          onClick={()=>setColor("gray")}
          className='outline-none px-4  py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor: "gray" }}
          >Gray </button>
          <button 
          onClick={()=>setColor("violet")}
          className='outline-none px-4  py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor: "violet" }}
          >Violet</button>
        </div>
      </div>
    </div>
  )
}

export default App



// learning :: Take care of props it is case sensitive , spelling galt mat karooo .