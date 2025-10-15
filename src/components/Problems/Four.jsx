import React, { useEffect, useState } from 'react'

const Four = () => {
    const [timer,setTimer] = useState(0)
    const [start,setStart] = useState(false)
    console.log(start)
  useEffect(()=>{
    let id
    function startTimer(){
       if(start){
         id = setInterval(()=>{
            setTimer(prev => prev + 1)
        },1000)
       }    
    }
    startTimer()
    return () => clearInterval(id) 
  },[start])
  return (
    <div>
        {timer}
      <button onClick={()=>{
         setStart(prev => !prev)
      }}>{start ? 'Stop' : 'Start'}</button>
    </div>
  )
}

export default Four
