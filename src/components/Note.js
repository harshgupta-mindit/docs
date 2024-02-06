import React from 'react'

const Note = ({children}) => {
  return (
    <div style={{backgroundColor: "#fef3c7", padding: "5px", margin: "10px", borderRadius:"10px"}}>
        <b>Note : </b>{children}
    </div>
  )
}

export default Note