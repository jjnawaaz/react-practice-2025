import React, { useEffect, useState } from 'react'

const Two = () => {
    const [start, setStart] = useState(false)
    const [count, setCount] = useState(60)

    useEffect(()=>{
        let id; 
        if(start && count > 0){
            id = setInterval(()=>{
                setCount(prev => prev - 1)
            },1000)
        }

        return () => clearInterval(id)
    },[start , count])
  return (
    <div>
        Count: {count}
        <button onClick={()=>setStart(prev => !prev)}>{start ? 'Stop' : 'Start'}</button>
        <button onClick={()=>setCount(60)} disabled={start}>Reset</button>
    </div>
  )
}

export default Two
