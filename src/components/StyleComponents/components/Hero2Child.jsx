import React from 'react'
import './styles/Hero2.css'

const Hero2Child = ({child}) => {
  console.log(child)
  return (
    <div className='hero-2-child'>
      <span>{child.content}</span>
      <span>{' '}</span>
      <span>{child.name}</span>
    </div>
  )
}

export default Hero2Child
