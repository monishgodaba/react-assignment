import React from 'react'
import GrandParent from './GrandParent'

const Child = (props) => {
  return (
    <>
      <GrandParent name={props.name} /> 
    </>
  )
}

export default Child