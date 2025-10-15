import React, { useEffect, useState } from 'react'

const One = () => {
    const [start, setStart] = useState(false)
    const [count,setCount] = useState(0)

    useEffect(()=>{
        let id;
        if(start){
        id = setInterval(()=>{
            setCount(prev => prev + 1)
        },1000)  
        }
        return () => clearInterval(id)
    },[start])
  return (
    <div>
        Count: {count}
      <button onClick={()=>setStart(prev => !prev)}>{start ? 'Stop' : 'Start'}</button>
      <button onClick={()=>setCount(0)} disabled={start}>{'Reset'}</button>
    </div>
  )
}

export default One
