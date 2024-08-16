import React, { useState } from 'react'

const SimpleForm = () => {
  const[inputValue,setInputValue] = useState('')
  const[displayValue,setDisplayValue] = useState('')
  const changeInputValue = (e) => setInputValue(e.target.value)
  const changeDisplayValue = (e) => {e.preventDefault(); setDisplayValue(inputValue)}
  return (
    <>
      <form>
        <input type="text" value = {inputValue} onChange={changeInputValue} />
        <button onClick={changeDisplayValue}>Submit</button>
      </form>
      <p>Your input is displayed here :{displayValue}</p>
    </>
  )
}

export default SimpleForm