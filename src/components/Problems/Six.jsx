import React, { useState } from 'react'

const Six = () => {
    const [plug, setPlug] = useState(false)
  return (
    <div style={{
        backgroundColor: plug ? 'red' : 'black',
        color: 'white'
    }}>
      Hello 
      <button onClick={()=>setPlug(prev => !prev)}>Change Color</button>
    </div>
  )
}

export default Six
