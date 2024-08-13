import React from 'react'

export default function Button(props) {
  const buttonStyle={
    backgroundColor:props.colorName,
    color:props.textColor || "white"
  }

  return (
  
       <button 
          onClick={props.onClick}
          className='outline-none px-4  py-1 rounded-full  shadow-lg'
          style={buttonStyle }
          >{props.colorName}</button>
        
  
  )
}
