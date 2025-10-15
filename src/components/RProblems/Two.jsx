import React, { useEffect, useState } from 'react'

const Two = () => {
    const[len,setLen]=useState(window.innerHeight)
    const[width,setWidth]=useState(window.innerWidth)

    useEffect(()=>{
        function changeLength(){
        setLen(window.innerHeight)
        setWidth(window.innerWidth)
    }

    addEventListener('resize', changeLength)

    },[len,width])



  return (
    <div>
        <h1>Height:{len}</h1>
        <h1>width:{width}</h1>
    </div>
  )
}

export default Two
