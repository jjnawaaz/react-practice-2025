import React, { useEffect, useState } from 'react'

const One = () => {
    const [height,setHeight] = useState(window.innerHeight)
    const [width,setWidth] = useState(window.innerWidth)

    useEffect(()=>{
        const resizeFunc = ()=>{
            setHeight(window.innerHeight)
            setWidth(window.innerWidth)
        }
        addEventListener('resize',resizeFunc)

        return () => removeEventListener('resize',resizeFunc)
    },[height, width])

    useEffect(()=>{
        console.log('Iam from second')
    },[])
  return (
    <div>
      <h4>Height: {height}</h4>
      <h4>Width: {width}</h4>
    </div>
  )
}

export default One
