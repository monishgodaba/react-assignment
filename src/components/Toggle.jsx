import React, { useState } from 'react'

const Toggle = () => {
  const[isOn,setIsOn] = useState(false)
  return (
    <>
      <button onClick={()=> setIsOn(!isOn)}>Turn {isOn?"off":"on"}</button>
      <p>The button is : {isOn?"ON":"OFF"}</p>
    </>
  )
}

export default Toggle