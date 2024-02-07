import React from 'react'

const Tag = ({children, color}) => {
  return (
    <span style={{backgroundColor: color ?? "#d1d5db", padding:'5px', margin: "2px", borderRadius: "10px"}}>
        {children}
    </span>
  )
}

export default Tag;