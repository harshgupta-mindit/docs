import React from 'react'

const Note = ({backgroundColor, color, children}) => {
  return (
    <div style={{backgroundColor: (backgroundColor ? backgroundColor : "#fef3c7"), color:(color ? color : "black"), padding: "5px", margin: "10px", borderRadius:"10px"}}>
        <b>Note : </b>{children}
    </div>
  )
}

export default Note