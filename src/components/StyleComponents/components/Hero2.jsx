import React from 'react'
import './styles/Hero2.css'
import Hero2Child from './Hero2Child'
import { data } from './data'
const Hero2 = () => {

  return (
    <div className='hero-2'>
      {
        data.map((item,idx)=>(
          <Hero2Child key={idx} child={item}/>
        ))
      }
    </div>
  )
}

export default Hero2
