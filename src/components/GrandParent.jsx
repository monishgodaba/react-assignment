import React from 'react'

const GrandParent = (props) => {
  return (
    <>
    <h1>GrandParent</h1>
      <h1>{props.name}</h1>
      <h2>Here</h2>
    </>
  )
}

export default GrandParent