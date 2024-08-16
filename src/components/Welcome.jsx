import React from 'react'
import { useState } from 'react'

const Welcome = () => {
  const[isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <>
      <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Click</button>
      <h2>{isLoggedIn ? "Welcome,User!" : "Please log in"}</h2>
    </>
  )
}

export default Welcome