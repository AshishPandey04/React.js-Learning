import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
  const data = useLoaderData()
    // const [data,setData]= useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/AshishPandey04')
    //     .then( response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     } )
    // },[])

  return (
  <>
    <div className='text-center m-4 p-4 rounded bg-gray-600 text-3xl text-white  leading-relaxed '> 
       Github User : {data.name} 
       <br />
      Github Followers: {data.followers}
      <img  className='w-56 rounded mx-auto my-3 shadow-md shadow-white '  src={data.avatar_url}  alt='Get Picture' />

    </div>
   
  </>
  )
}


export const githubInfoLoader = async ()=>{
  const response = await fetch('https://api.github.com/users/AshishPandey04')
  return response.json() 
}