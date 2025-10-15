import React, { useEffect, useState } from 'react'

const Three = () => {
    let [height, setHeight] = useState(window.innerHeight)
    let [width, setWidth] = useState(window.innerWidth)
    useEffect(()=>{
        function changeWindowSize(){
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
        }
        window.addEventListener('resize',changeWindowSize)
        return () => removeEventListener('resize',changeWindowSize)
    },[height, width])
  return (
    <div>
      Height: {height}
      Width: {width}
    </div>
  )
}

export default Three
